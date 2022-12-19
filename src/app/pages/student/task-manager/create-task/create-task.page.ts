import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.page.html',
  styleUrls: ['./create-task.page.scss'],
})
export class CreateTaskPage implements OnInit {
  type = 'deposit';

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  constructor() {}

  ngOnInit() {}
}
