import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomParserFormatter } from './util/ngbDateCustomParserFormatter';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), FormsModule
  ],
  providers: [
    {
      provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
