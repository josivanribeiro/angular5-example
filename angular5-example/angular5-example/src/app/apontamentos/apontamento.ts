/* Copyright Caixa Econômica Federal 2018 */
import { Content } from './content';
import { Sort } from '../common/sort';
/**
 * Class that represents Apontamento.
 * 
 *  @author josivan.silva@castgroup.com.br
 */
export class Apontamento {
  
  content: Content[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  numberOfElements: number;
  sort: Sort[];
  size: number;
  number: number;
  
  public constructor (content: Content[], last: boolean, totalPages: number, totalElements: number, first: boolean, numberOfElements: number, sort: Sort[], size: number, number: number) {
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