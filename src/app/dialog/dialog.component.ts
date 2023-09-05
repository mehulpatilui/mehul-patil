import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  pdfUrl: any;
  fileName: any;
  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private sanitizer: DomSanitizer) {
    if (this.data && this.data.url) {
      this.pdfUrl = this.data.url;
      let loader: any = document.getElementById('loader');
      loader.style.display = 'flex';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 3000);
    } else {
      this.close();
    }
  }

  ngOnInit(): void {
    this.fileName = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://mehulpatilui.github.io/mehul-patil/assets/files/Mehul_Patil.pdf'
    );
    setTimeout(() => {
      
    }, 0);
  }

  close(){
    this.dialogRef.close();
  }
}
