/* Copyright Caixa Econômica Federal 2018 */
import { Component, OnInit, Directive } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ApontamentoService } from '../services/apontamento.service';
import { Apontamento } from './apontamento';
import { Content } from './content';
import { Constants } from '../util/constants';
import {HttpErrorResponse}  from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Functions } from '../util/functions';
import { Situacao } from '../common/situacao';
import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';

/**
 * Component class that represents Apontamento.
 * 
 *  @author josivan.silva@castgroup.com.br
 */
@Component({
  selector: 'app-apontamento',
  templateUrl: './apontamento.component.html'
})
export class ApontamentoComponent implements OnInit {

  /* Page form attributes */
  apontamentoForm: FormGroup;
  id: string;
  nome: FormControl;
  descricao: FormControl;
  
  situacoes = [
    new Situacao("true", "Ativo"),
    new Situacao("false", "Inativo")
  ];
  selectedSituacao: Situacao = new Situacao ("true","Ativo");

  /* Edit mode attributes */
  isAdd: boolean = false;
  isDetails: boolean = false;
  isEdit: boolean = false;  
    
  subscribe: any;

  /**
  * Represents an Apontamento.
  * @constructor
  * @param {ApontamentoService} apontamentoService - The apontamento service.
  * @param {ActivatedRoute} activatedRoute - The activated route.
  * @param {Router} router - The router.
  * @param {Modal} modal - The modal.
  */
  constructor(private apontamentoService: ApontamentoService,              
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public modal: Modal) {
  }

  /** 
  * Called after data-bound properties of a directive are initialized.
  */
  public ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.setEditMode ();

    this.subscribe = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];      
      this.getApontamentoById(this.id);      
    });

    if (this.id == null || this.id == "") {
      this.getNextId();      
    }    
  }  

  /** 
  * Calling event for apontamento insertion.
  */
  public onInsertApontamento() {
    const dialogRef = this.modal.confirm()
        .size('sm')
        .showClose(true)
        .keyboard(27)
        .headerClass('modal-header-blue')
        .title('Incluir registro?')
        .okBtn('Incluir')
        .cancelBtn('Cancelar')
        .open();

    dialogRef.result
        .then( 
          result => this.insertApontamento()          
        );
  }
  
  /** 
  * Saves an Apontamento.
  */
  public insertApontamento() {    
    if (this.apontamentoForm.invalid) {
      Functions.createModalAlert(this.modal, 'É necessário preencher todos os campos.');
      return;
    }    
    var content = new Content("", this.nome.value, this.descricao.value, "true", "false");
    this.apontamentoService.insertApontamento(content).subscribe(data => {            
      if (data != null) {
        if (data.status === Constants.HTTP_STATUS_CODE_CREATED) {          
          Functions.createModalSuccess(this.modal, 'Apontamento incluído com sucesso.');
          this.router.navigate([Constants.APONTAMENTOS_LIST_PATH]);
        }
      }      
    },
    (err: HttpErrorResponse) => {      
      if (err != null) {
        if (err.status === Constants.HTTP_STATUS_CODE_BAD_REQUEST) {
          Functions.createModalError(this.modal, 'Registro não incluído, existe outro com o mesmo nome.');
        } else if (err.status >= 401 && err.status < 500) {
          Functions.createModalError(this.modal, 'Ocorreu um erro no lado cliente.');
        } else if (err.status >= 500 && err.status < 600) {
          Functions.createModalError(this.modal, 'Ocorreu um erro no lado servidor.');
        }
      }    
    });
  }

  /** 
  * Calling event for apontamento update.
  */
  public onUpdateApontamento() {
    const dialogRef = this.modal.confirm()
        .size('sm')
        .showClose(true)
        .keyboard(27)
        .headerClass('modal-header-blue')
        .title('Alterar registro?')
        .okBtn('Alterar')
        .cancelBtn('Cancelar')
        .open();

    dialogRef.result
        .then( 
          result => this.updateApontamento()          
        );
  }

  /** 
  * Updates an Apontamento.
  */
  public updateApontamento() {
    if (this.apontamentoForm.invalid) {
      Functions.createModalAlert(this.modal, 'É necessário preencher todos os campos.');
      return;
    }    
    var content = new Content(this.id, this.nome.value, this.descricao.value, this.selectedSituacao.value, "false");    
    this.apontamentoService.updateApontamento(content).subscribe(data => {      
      if (data != null) {
        if (data.status === Constants.HTTP_STATUS_CODE_NO_CONTENT) {
          Functions.createModalSuccess(this.modal, 'Apontamento alterado com sucesso.');
          this.router.navigate([Constants.APONTAMENTOS_DETAILS_PATH + "/" + this.id]);          
        }
      }      
    },
    (err: HttpErrorResponse) => {      
      if (err != null) {
        if (err.status === Constants.HTTP_STATUS_CODE_BAD_REQUEST) {
          Functions.createModalError(this.modal, 'Registro não incluído, existe outro com o mesmo nome.');
        } else if (err.status >= 401 && err.status < 500) {
          Functions.createModalError(this.modal, 'Ocorreu um erro no lado cliente.');
        } else if (err.status >= 500 && err.status < 600) {
          Functions.createModalError(this.modal, 'Ocorreu um erro no lado servidor.');
        }
      }
    });
  }

  /** 
  * Gets the selected situacao.
  */
  public onClickSituacao(value) {
    this.selectedSituacao = this.situacoes.filter((item)=> item.value == value)[0];    
  }

  /** 
  * Sets the input value to uppercase.
  */
  public setUpperCase (event: any) {  
    event.target.value = event.target.value.toUpperCase();
  }

  /** 
  * Calling event for apontamento deletion.
  */
  public onDeleteApontamento() {
    const dialogRef = this.modal.confirm()
        .size('sm')
        .showClose(true)
        .keyboard(27)
        .headerClass('modal-header-red')
        .title('Excluir registro?')
        .body(`<b>` + this.nome.value + `</b>`)
        .okBtn('Excluir')
        .okBtnClass('btn btn-danger')
        .cancelBtn('Cancelar')
        .open();

    dialogRef.result
        .then( 
          result => this.deleteApontamento()          
        );
  }

  /** 
  * Deletes an Apontamento.
  */
  private deleteApontamento() {    
    this.apontamentoService.deleteApontamento(this.id).subscribe(data => {
      if (data != null) {
        if (data.status === Constants.HTTP_STATUS_CODE_NO_CONTENT) {          
          Functions.createModalSuccess(this.modal, 'Apontamento excluído com sucesso.');
          this.router.navigate([Constants.APONTAMENTOS_LIST_PATH]);
        }
      }      
    },
    (err: HttpErrorResponse) => {      
      if (err != null) {
        if (err.status === Constants.HTTP_STATUS_CODE_BAD_REQUEST) {
          Functions.createModalError(this.modal, 'Registro não pode ser excluído pois está vinculado.');
        } else if (err.status >= 401 && err.status < 500) {
          this.modal.alert()
          Functions.createModalError(this.modal, 'Ocorreu um erro no lado cliente.');
        } else if (err.status >= 500 && err.status < 600) {          
          Functions.createModalError(this.modal, 'Ocorreu um erro no lado servidor.');
        }
      }      
    });
  }  
  
  /** 
  * Creates the form controls.
  */
  private createFormControls() {
    this.nome = new FormControl('', Validators.required);
    this.descricao = new FormControl('', Validators.required);    
  }
  
  /** 
  * Creates the form.
  */
  private createForm() {
    this.apontamentoForm = new FormGroup({
      nome: this.nome,
      descricao: this.descricao
    });
  }  

  /** 
  * Sets the page edit mode.
  */
  private setEditMode () {    
    if (Functions.urlContainsPathByRegex(Constants.APONTAMENTOS_EDIT_PATH_REGEX)) {
      this.isEdit = true;      
    } else if (Functions.urlContainsPathByRegex(Constants.APONTAMENTOS_DETAILS_PATH_REGEX)) {
      this.isDetails = true;      
    } else if (Functions.urlContainsPath(Constants.APONTAMENTOS_ADD_PATH)) {
      this.isAdd = true;
    }
  }

  /* Called when a directive, pipe or service is destroyed */
  private ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  /** 
  * Gets the next id.
  */
  private getNextId() {
    this.apontamentoService.getNextId().subscribe(data => {
      this.id = data;
    });
  }

  /** 
  * Gets the apontamento by id.
  */
  private getApontamentoById(id) {
    this.apontamentoService.getApontamentoById(id).subscribe(data => {
      this.id = data.nuApontamento;
      this.nome.setValue(data.noApontamento);
      this.descricao.setValue(data.deApontamento);
      if (data.icAtivo) {
        this.selectedSituacao = new Situacao("true","Ativo");
      } else {
        this.selectedSituacao = new Situacao("false","Inativo");
      }
    });
  }

}