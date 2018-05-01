import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Pagination } from './pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  list = [];
  pagination: Pagination;  
  //sorting
  key: string = 'name'; //set default

  reverse: boolean = false;
  
  constructor(private userService: UserService){
    this.title = "Angular 2 custom pagination";    
    this.pagination = new Pagination(1, 10, 2, 20);
  }

  ngOnInit() {
    this.userService.getUsers(this.pagination.currentPage, this.pagination.pageSize).then(data => this.list = data);
  }

  performSearch(currentPage) {
    if (!isNaN(currentPage)) {
      alert("performSearch...currentPage: " + currentPage);
      this.pagination.currentPage = parseInt (currentPage);
      //this service must return, in addition to the list, the totalPages and totalRows values
      this.userService.getUsers(this.pagination.currentPage, this.pagination.pageSize).then(data => this.list = data);
    }    
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  getInitialRowNumber() {    
    if (this.pagination.currentPage != 1) {
      return (this.pagination.currentPage - 1) * this.pagination.pageSize + 1;
    }
    return this.pagination.currentPage;
  }

  getFinalRowNumber() {
    if (this.pagination.currentPage < this.pagination.totalPages) {
      return this.pagination.currentPage * this.pagination.pageSize;
    } else if (this.pagination.currentPage == this.pagination.totalPages) {
      return this.pagination.totalRows;
    }    
  }

}