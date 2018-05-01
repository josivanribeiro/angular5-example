/* Copyright Caixa Econômica Federal 2018 */

import { HistoricoContent } from './historicocontent';
import { Sort } from './sort';

/**
 * Class that represents Historico.
 * 
 *  @author josivan.silva@castgroup.com.br
 */
export class Historico {
  
  content: HistoricoContent[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  numberOfElements: number;
  sort: Sort[];
  size: number;
  number: number;
  
  public constructor (content: HistoricoContent[], last: boolean, totalPages: number, totalElements: number, first: boolean, numberOfElements: number, sort: Sort[], size: number, number: number) {
    this.content = content;
    this.last =  last;
    this.totalPages = totalPages;
    this.totalElements = totalElements;
    this.first = first;
    this.numberOfElements = numberOfElements;
    this.sort = sort;
    this.size = size;
    this.number = number;
  }  

}