import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
declare var require: any

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  cvUrl: any

  constructor(private profileService: ProfileService, private dialog: MatDialog) { }

  ngOnInit() {

    this.cvUrl =  this.profileService.resumeurl;
    
  }

  download(){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '100%',
      height: '100%',
      panelClass: 'open_cv_dialog',
      autoFocus: false,
      data: {
        url: './assets/files/Mehul_Patil.pdf'
      },
    });

  }

}
