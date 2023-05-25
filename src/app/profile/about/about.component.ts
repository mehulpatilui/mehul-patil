import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
about1: any
about2: any
experiance!: any;

constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.totalExp();
    this.about1 =  this.profileService.about;
    this.about2 =  this.profileService.about2;
  }

  totalExp() {
    const startDate = new Date(2022, 1, 1); // month start at 0
    const currentDate = new Date();
    const months = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());
    var dur1 = Math.floor(months / 12);
    var dur2 = (months / 12) - dur1;
    var dur3 = Math.floor(dur2 * 12);
    if(dur3 != 0){
      this.experiance = dur1+'.'+dur3
    } else {
      this.experiance = dur1
    }
  }

}
