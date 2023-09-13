import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { MatDialog } from '@angular/material/dialog';
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
    window.open('https://mehulpatilui.github.io/mehul-patil/assets/files/Mehul_Patil.pdf', '_blank');
  }

}
