/* Copyright Caixa Econômica Federal 2018 */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse}  from '@angular/common/http';
import {Http, Response, Headers} from "@angular/http";
import {Apontamento} from '../apontamentos/apontamento';
import {Content} from '../apontamentos/content';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Functions } from '../util/functions';

/**
 * Service class that represents Apontamentos.
 * 
 *  @author juliana.silva@castgroup.com.br / josivan.silva@castgroup.com.br
 */
@Injectable()
export class ApontamentoService {

    private apontamentosUrl;
    private nextIdUrl;
    private baseUrl: string;

    //private apontamentosUrl = 'http://localhost:8080/api/v1/apontamentos';
    //private nextIdUrl = 'http://localhost:8080/api/v1/apontamentos/nextid';

    constructor(private http: HttpClient) {
        this.baseUrl = Functions.getBaseUrl();
        this.apontamentosUrl = this.baseUrl + '/v1/apontamentos';
        this.nextIdUrl = this.baseUrl + '/v1/apontamentos/nextid';
    }

    /** 
    * Gets the Apontamentos by filter. 
    * @param {string} nome - The nome filter.
    * @param {boolean} situacao - The situacao filter.
    * @param {number} currentPage - The current page.
    * @param {number} pageSize - The page size.
    * @param {string} orderBy - The order by.
    * @param {string} direction - The page size.
    */
    public getApontamentosByFilter(nome, situacao, currentPage, pageSize, orderBy, direction) {
        let httpParams = new HttpParams();
        if (nome != null && nome != "") {
            httpParams = httpParams.append('nome', nome);
        }
        if (situacao != null && situacao != "") {            
            httpParams = httpParams.append('situacao', situacao);
        }
        httpParams = httpParams.append('page', currentPage);
        httpParams = httpParams.append('linesPerPage', pageSize);
        httpParams = httpParams.append('orderBy', orderBy);
        httpParams = httpParams.append('direction', direction);      
        return this.http.get<Apontamento>(this.apontamentosUrl, { params: httpParams }).map((res:Apontamento) => res);
    }    

    /** 
    * Gets the Apontamentos by situacao without pagination.
    */
    public getApontamentosBySituacaoWithoutPagination(situacao) {                 
        let httpParams = new HttpParams();
        httpParams = httpParams.append('situacao', situacao);
        return this.http.get(this.apontamentosUrl, { params: httpParams }).map((res:Apontamento) => res);
    }

    /** 
    * Gets the Apontamento next id. 
    */
    public getNextId() {                 
        return this.http.get(this.nextIdUrl).map((res:string) => res);
    }

    /** 
    * Inserts an Apontamento.
    */
    public insertApontamento(apontamento) {                 
        let body = JSON.stringify(apontamento);
        return this.http.post<HttpResponse<any>>(this.apontamentosUrl + '/', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json'), observe:'response'
        }).map((res: HttpResponse<any>) => res);
    }

    /** 
    * Gets the Apontamento by id.
    */
    public getApontamentoById(id) {                 
        return this.http.get(this.apontamentosUrl + '/' + id).map((res:Content) => res);
    }

    /**
     * Get Apontamentos Ativos
     */
    public getApontamentosBySituacaoAtivo() {                 
        return this.http.get(this.apontamentosUrl + '/situacao/' + "true").map((res:any[]) => res);
    }

    /** 
    * Deletes the Apontamento by id.
    */
    public deleteApontamento(id) {                 
        return this.http.delete<HttpResponse<any>>(this.apontamentosUrl + '/' + id, {observe:'response'}).map((res:HttpResponse<any>) => res);
    }

    /** 
    * Updates the Apontamento.
    */
    public updateApontamento(apontamento) {                 
        let body = JSON.stringify(apontamento);
        let id = (<Content>apontamento).nuApontamento;
        return this.http.put<HttpResponse<any>>(this.apontamentosUrl + '/' + id, body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json'), observe:'response'
        }).map((res: HttpResponse<any>) => res);
    }

}