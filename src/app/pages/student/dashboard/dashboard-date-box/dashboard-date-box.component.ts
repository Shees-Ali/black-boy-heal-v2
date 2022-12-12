import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-date-box',
  templateUrl: './dashboard-date-box.component.html',
  styleUrls: ['./dashboard-date-box.component.scss'],
})
export class DashboardDateBoxComponent implements OnInit {
  @Input('showTodaysDate') showTodaysDate: boolean = true;
  constructor() {}

  ngOnInit() {}
}
