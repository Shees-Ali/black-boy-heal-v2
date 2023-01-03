import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-dashboard-date-box',
  templateUrl: './dashboard-date-box.component.html',
  styleUrls: ['./dashboard-date-box.component.scss'],
})
export class DashboardDateBoxComponent implements OnInit {
  @Input('showTodaysDate') showTodaysDate: boolean = true;
  currentday: number = 0;
  currentMounth: number = 0;

  array:any[] = [];
  constructor() {}

  ngOnInit() {
    this.startLoopForMounth();
  }

  startLoopForMounth() {
    this.currentday = Number(moment().format('DD'));
    this.currentMounth = moment().daysInMonth();
    var year = moment().format('YYYY');
    var mounth = moment().format('MM');
    console.log(this.currentday);
    for (let index = 0; index < this.currentMounth; index++) {
      var day = index+1
      var dd = moment(year+mounth+day+"","YYYYMMDD").format("ddd")
      this.array.push({
        id: 1,
        day: dd,
        date: day,
      });
    }
  }
}
