import {Injectable} from '@angular/core';
import { HttpClient }  from '@angular/common/http'; 

@Injectable()
export class MenuService {

    constructor(private http: HttpClient) {}

     public getJSON() {
             return this.http.get<any>('assets/menu/menu-data.json')
         .toPromise()
         .then(res => res.data)
         .then(data => { return data; });
     }
     
}