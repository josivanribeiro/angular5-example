import { BrowserModule } from '@angular/platform-browser';                       
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';                                        
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';                      
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { LocationStrategy, HashLocationStrategy } from '@angular/common'; 
import { InputTextModule,DataTableModule,ButtonModule,DialogModule } from 'primeng/primeng';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { AppRoutingModule } from './app-routing.module';

import { MenuService } from './services/menu.service';
import { ApontamentoService } from './services/apontamento.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { ApontamentosComponent } from './apontamentos/apontamentos.component';
import { ApontamentoComponent } from './apontamentos/apontamento.component';

import { Ng2OrderModule } from 'ng2-order-pipe';
import { SearchFilterPipe } from './util/search-filter.pipe';
import { InputTrimModule } from 'ng2-trim-directive';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';

import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomParserFormatter } from './util/ngbDateCustomParserFormatter';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'primeng/primeng';
import {NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';
import {CustomDatepickerI18n, I18n} from './util/datepicker-i18n';

@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    DashboardComponent,
    NotfoundComponent,
    ApontamentosComponent,
    ApontamentoComponent,
    SearchFilterPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,     
    ReactiveFormsModule,                                                         
    HttpClientModule,                                                            
    BrowserAnimationsModule,
    InputTextModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    AppRoutingModule,
    Ng2OrderModule,
    InputTrimModule,
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    BootstrapModalModule,
    FileUploadModule
  ],
  providers: [
    MenuService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ApontamentoService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }    
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppModule { }
