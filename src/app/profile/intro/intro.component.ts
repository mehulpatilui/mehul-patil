import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  cvUrl: any

  constructor(private profileService: ProfileService) { }

  ngOnInit() {

    this.cvUrl =  this.profileService.resumeurl;
    
  }

  download(){
    const pdfName = 'Mehul Patil';
    FileSaver.saveAs('https://drive.google.com/drive/folders/1nSAWVnhaCpgLJ7wn93FUrVMlIt5EjW6X', pdfName);
  }

}
