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
    this.about1 = `I am a Frontend Developer with over ${this.totalYears}.${this.totalMoth} years of experience building scalable and high-performance web applications. I specialize in Angular, TypeScript, and modern JavaScript, with hands-on experience across the Software Development Life Cycle (SDLC). I have worked extensively on real-time communication systems using WebRTC, along with integrations like Firebase Cloud Messaging (FCM) and multilingual support. Currently working as a Software Engineer, I focus on writing clean, maintainable code and optimizing application performance. I enjoy solving complex problems and continuously improving user experience through modern development practices. Beyond my professional work, I have a strong passion for traveling and exploring new cultures, which helps me stay curious, adaptable, and open to new ideas.`;
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
