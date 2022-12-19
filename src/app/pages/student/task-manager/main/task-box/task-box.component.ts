import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base/base';

@Component({
  selector: 'task-box',
  templateUrl: './task-box.component.html',
  styleUrls: ['./task-box.component.scss'],
})
export class TaskBoxComponent extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {}

  gotoCreateTask() {
    this.nav.navigateTo('student/task-manager/create-task');
  }
}
