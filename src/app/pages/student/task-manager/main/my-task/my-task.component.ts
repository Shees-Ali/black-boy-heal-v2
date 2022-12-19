import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base/base';

@Component({
  selector: 'my-task-box',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.scss'],
})
export class MyTaskComponent extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {}

  gotoTaskCalender() {
    this.nav.navigateTo('student/task-manager/task-calender');
  }
}
