import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  constructor(private profileService: ProfileService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  download(){

    console.log(location + 'assets/files/Mehul_Patil.pdf');
    
    // window.open(location + 'assets/files/Mehul_Patil.pdf', '_blank')
    // return
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
