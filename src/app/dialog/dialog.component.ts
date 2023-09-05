import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  pdfUrl: any;

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,) {
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
    setTimeout(() => {
      
    }, 0);
  }

  close(){
    this.dialogRef.close();
  }
}
