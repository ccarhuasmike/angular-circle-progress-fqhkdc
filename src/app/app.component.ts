import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  progressHour = 0;
  progressMinute = 0;
  progressDay = 0;
  today!: Date;
  christmas!: Date;

  constructor() {}
  progressBar = document.querySelector('.progress-bar');
  intervalIdHour;
  intervalIdMinute;

  ngOnInit() {
    this.today = new Date();
    this.christmas = new Date('2020-12-25');
    var diffMs = Christmas - today; // milliseconds between now & Christmas
    this.progressDay = Math.floor(diffMs / 86400000); // days
    this.progressHour = Math.floor((diffMs % 86400000) / 3600000); // hours
    this.progressMinute = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

    const getHourProgress = () => {
      if (this.progressHour <= 99) {
        this.progressHour = this.progressHour + 1;
      } else {
        clearInterval(this.intervalIdHour);
      }
    };

    const getMinuteProgress = () => {
      if (this.progressMinute <= 99) {
        this.progressMinute = this.progressMinute + 1;
      } else {
        clearInterval(this.intervalIdMinute);
      }
    };

    this.intervalIdHour = setInterval(getHourProgress, 60 * 60 * 1000);
    this.intervalIdMinute = setInterval(getMinuteProgress, 60000);
  }

  function() {}
}
