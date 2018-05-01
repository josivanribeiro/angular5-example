import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // Inject pdfmake service
 constructor() {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  //called first time before the ngOnInit()
  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  var dd = { content: 'your pdf data' };
  pdfMake.createPdf(dd).download();
 }
 
 ngOnInit() {  
 }
 
}
