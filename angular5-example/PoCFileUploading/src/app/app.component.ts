import { Component, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/primeng';
import { saveAs } from 'file-saver/FileSaver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('fileInput') fileInput: FileUpload;
  file: File;

  startUpload() {
    this.fileInput.upload();
  }  

  startDownload() {
    this.file = this.fileInput.files[0];
    saveAs(this.file, this.file.name);
  }

}
