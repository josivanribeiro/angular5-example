import {Injectable} from '@angular/core';
import { HttpClient }  from '@angular/common/http'; 

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {}

     public getUsers(pageNumber, linesPerPage) {
             return this.http.get<any>('assets/user/user-data.json')
         .toPromise()
         .then(res => res.data)
         .then(data => { return data; });
     }
     
}