import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base/base';

@Component({
  selector: 'app-message-person',
  templateUrl: './message-person.component.html',
  styleUrls: ['./message-person.component.scss'],
})
export class MessagePersonComponent extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {}

  goToChat() {
    this.nav.navigateTo('student/student-chat/chat-box');
  }
}
