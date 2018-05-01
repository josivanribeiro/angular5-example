/* Copyright Caixa Econômica Federal 2018 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ApontamentoService } from '../services/apontamento.service';
import { Pagination } from '../util/pagination';
import { Apontamento } from './apontamento';
import { Content } from './content';
import { Situacao } from '../common/situacao';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { Functions } from '../util/functions';
import { Constants } from '../util/constants';
import { RouterModule, Routes } from '@angular/router';
/**
 * Component class that represents Apontamentos.
 * 
 *  @author josivan.silva@castgroup.com.br
 */
@Component({
  selector: 'app-apontamentos',
  templateUrl: './apontamentos.component.html'
})
export class ApontamentosComponent implements OnInit {
  
  apontamento: Apontamento;
  apontamentoReport = {};
  pagination: Pagination;
  nomeFilter: string = null;
  selectedSituacao: Situacao = new Situacao("", "Todos");
  situacoes = [
    new Situacao("", "Todos"),
    new Situacao("true", "Ativos"),
    new Situacao("false", "Inativos")
  ];
  selectedOrderBy: string = "noApontamento";
  selectedDirection: string = Constants.ORDERING_DIRECTION_ASC;
  
  /**
  * Represents an Apontamentos.
  * @constructor
  * @param {ApontamentoService} apontamentoService - The apontamento service.
  * @param {Modal} blocoService - The modal.
  */
  constructor(private apontamentoService: ApontamentoService, public modal: Modal) {
    this.pagination = new Pagination(1, 10);  
  }

  /** 
  * Called after data-bound properties of a directive are initialized.
  */
  public ngOnInit() {
    this.performSearchByFilter(1);
  }

  /** 
  * Performs the search by filter on apontamentos. 
  * @param {string} currentPage - The current page.
  */
  public performSearchByFilter(currentPage) {
    if (this.isValidCurrentPage(currentPage, this.pagination)) {
      this.pagination.currentPage = parseInt (currentPage);
      this.apontamentoService.getApontamentosByFilter(this.nomeFilter, this.selectedSituacao.value, this.pagination.currentPage-1, this.pagination.pageSize, this.selectedOrderBy, this.selectedDirection).subscribe(data => {
        this.apontamento = data;
        this.pagination.totalRows = data.totalElements;
      });
    }
  }  

  /** 
  * Applies filter name on Apontamentos.
  */
  public onKeyName (event) {
    var nome = event.target.value;
    if (nome.length == 0 || nome.length >= 3) {      
      this.performSearchByNomeAndSituacao ();
    }
  }

  /** 
  * Sets the input value to uppercase.
  */
  public setUpperCase (event) {  
    event.target.value = event.target.value.toUpperCase();
  }

  /** 
  * Performs the search by the situacao filter. 
  */
  public performSearchBySituacao(value) {
    this.selectedSituacao = this.situacoes.filter((item)=> item.value == value)[0];
    this.performOrderedSearchBySituacao();
  }

  /** 
  * Performs the ordered search by filter on apontamentos. 
  * @param {string} orderBy - The orderBy.
  */
  public performOrderedSearchByFilter (orderBy) {    
            
    if (this.selectedOrderBy != orderBy) {
      this.selectedDirection = Constants.ORDERING_DIRECTION_ASC;
    } else if (this.selectedDirection == Constants.ORDERING_DIRECTION_ASC) {
      this.selectedDirection = Constants.ORDERING_DIRECTION_DESC;
    } else {
      this.selectedDirection = Constants.ORDERING_DIRECTION_ASC;
    }
    
    this.selectedOrderBy = orderBy;

    this.apontamentoService.getApontamentosByFilter(this.nomeFilter, this.selectedSituacao.value, this.pagination.currentPage-1, this.pagination.pageSize, this.selectedOrderBy, this.selectedDirection).subscribe(data => {
      this.apontamento = data;
      this.pagination.totalRows = data.totalElements;
    });
  }

  /** 
  * Exports the apontamentos to a CSV file. 
  */
  public exportToCsv() {
    this.apontamentoService.getApontamentosBySituacaoWithoutPagination(this.selectedSituacao.value).subscribe(data => {
      this.apontamentoReport = data;
      this.handleReport();
      if (this.apontamentoReport != null 
              && (<Apontamento>this.apontamentoReport).content != null
              && (<Apontamento>this.apontamentoReport).content.length > 0) {
        var dataReport = JSON.parse(JSON.stringify((<Apontamento>this.apontamentoReport).content));
        
        var options = { 
          fieldSeparator: ',',
          quoteStrings: '',
          decimalseparator: '.',
          showLabels: false, 
          showTitle: false,
          useBom: true
        };        
        
        return new Angular2Csv(dataReport, 'Apontamentos', options);
      }
    });
  }

  /** 
  * Performs the search by name and situacao on apontamentos. 
  * @param {string} name - The current page.
  */
  private performSearchByNomeAndSituacao(){
    this.pagination.currentPage = 1;
    this.selectedOrderBy = "noApontamento";
    this.selectedDirection = Constants.ORDERING_DIRECTION_ASC;
    this.apontamentoService.getApontamentosByFilter(this.nomeFilter, this.selectedSituacao.value, this.pagination.currentPage-1, this.pagination.pageSize, this.selectedOrderBy, this.selectedDirection).subscribe(data => {
      this.apontamento = data;
      this.pagination.totalRows = data.totalElements;      
    });
  }

  /** 
  * Performs the ordered search by situacao on apontamentos.
  */
  private performOrderedSearchBySituacao(){
    this.pagination.currentPage = 1;
    this.selectedOrderBy = "icAtivo,noApontamento";
    this.selectedDirection = Constants.ORDERING_DIRECTION_ASC;
    this.apontamentoService.getApontamentosByFilter(this.nomeFilter, this.selectedSituacao.value, this.pagination.currentPage-1, this.pagination.pageSize, this.selectedOrderBy, this.selectedDirection).subscribe(data => {
      this.apontamento = data;
      this.pagination.totalRows = data.totalElements;      
    });
  }
  
  /** 
  * Checks if the current page is valid or not. 
  * @param {number} currentPage - The current page.
  * @param {Pagination} pagination - The pagination.
  */
  private isValidCurrentPage(currentPage, pagination) {  
    var result: boolean = true;    
    if (isNaN(currentPage) 
          || currentPage <= 0
          || currentPage > pagination.totalPages) {
      result = false;
      Functions.createModalAlert(this.modal, 'Número de página inválido.');
    }
    return result;
  } 
  
  /** 
  * Handles data to show in the report.
  */
  private handleReport() {
    for (var i = 0; i < (<Apontamento>this.apontamentoReport).content.length; i++) {
      var content = (<Apontamento>this.apontamentoReport).content[i];      
      if (content.icAtivo) {
        content.icAtivo = "Ativo";
      } else {
        content.icAtivo = "Inativo";
      }
      content.icExcluido = "";
    }    
    var contentHeader = new Content("Código", "Nome", "Descrição", "Situação","");
    var contentHeaderArr = new Array();
    contentHeaderArr.push(contentHeader);
    var contentResultArr = new Array();
    contentResultArr = contentResultArr.concat(contentHeaderArr);
    contentResultArr = contentResultArr.concat((<Apontamento>this.apontamentoReport).content);
    (<Apontamento>this.apontamentoReport).content = contentResultArr;
  }

}
