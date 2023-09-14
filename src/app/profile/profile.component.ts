import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isOpencard: boolean = false;
  cookiesValue = 'Wt8tV4MEfZab9tjJacrn41mEZw3JGmbWA6FlWeTbXTgR5s9JrDushueSk8RAYgrubijWVUowRyelC8fH8MktMN8i5fuQazaQ7lMoJN1iTb6v0lkIRhMantaVoGc8uLDjRO9j6FdXB7vAGymQ9mhtnnGLEac3EVn347AyOQCsmhcyl2I5FatH4G0Mijvma4Cf2Ioigqjra132awoFd6AX3rE1nGKGq0wEOSkcDWxpThRrcBC2pOBsDxwcfva756Jwe5aJv13bmw5svE5nVNK0aFvjy42AJS16UH5duJCzFvzL'
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.checkCookie();
    let loader: any = document.getElementById('loader');
    loader.style.display = 'none'; 
  }

  checkCookie(){
    if(localStorage.getItem('ZT_JD_KT')){
      let cookieVal: any = localStorage.getItem('ZT_JD_KT');
      cookieVal = cookieVal.split("").reverse().join("");
      if(cookieVal == this.cookiesValue){
         this.isOpencard = false;
      }
    }

  }

  acceptCookies(){
    let cookiesVal = this.cookiesValue.split("").reverse().join("");
    localStorage.setItem('ZT_JD_KT', cookiesVal);
    this.isOpencard = false;
  }

  cancelCookies(){
    this.isOpencard = false;
  }

}
