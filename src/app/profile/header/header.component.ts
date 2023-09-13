import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  closeNav(){
    if(window.innerWidth < 979){
      let btn: any = document.getElementById('closbtn');
      btn.click();
    }
  }

  scrolltoTop(){
    window.scrollTo(0, 0);
  }

}
