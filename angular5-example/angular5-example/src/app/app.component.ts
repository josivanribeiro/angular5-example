/* Copyright Caixa Econômica Federal 2018 */
import { Component, AfterViewInit } from '@angular/core';

declare var $: any;
/**
 * Component class that represents AppComponent.
 * 
 *  @autor josivan.silva@castgroup.com.br
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'  
})
export class AppComponent {  
    
    ngAfterViewInit() {
       $('[data-submenu]').submenupicker();
    }
    
}

