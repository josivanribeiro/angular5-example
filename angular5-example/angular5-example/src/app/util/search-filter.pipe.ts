/* Copyright Caixa Econômica Federal 2018 */
import { Injectable, Pipe, PipeTransform } from '@angular/core';
/**
 * Util Pipe class that represents SearchFilter.
 * 
 *  @autor josivan.silva@castgroup.com.br
 */
@Pipe({
 name: 'searchfilter'
})
@Injectable()
export class SearchFilterPipe implements PipeTransform {
 transform(items: any[], field: string, value: string): any[] {
   if (!items) {
     return [];
   } else if (value == null) {
    return items;
   } else {
    return items.filter(it => it[field] == value);
   }
 }
}