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
oldDate = new Date('2022-01-01');
currentDate = new Date();
totalYears: any;
totalMoth: any;

constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.totalExp();
    this.about1 =  this.profileService.about;
    this.about2 =  this.profileService.about2;
  }

  totalExp() {
    const yearDiff = this.currentDate.getFullYear() - this.oldDate.getFullYear();
    const monthDiff = this.currentDate.getMonth() - this.oldDate.getMonth();
    let Months = yearDiff * 12 + monthDiff;
    this.totalYears = Math.floor(Months / 12);
    this.totalMoth = Months % 12;
  }
}
