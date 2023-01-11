import { Component, Injector, Input, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base/base';

@Component({
  selector: 'app-my-friends',
  templateUrl: './my-friends.component.html',
  styleUrls: ['./my-friends.component.scss'],
})
export class MyFriendComponent extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  @Input() request: any;

  ngOnInit() {
    console.log('data', this.request);
  }
  async approve() {
    let request = {
      friend_id: this.request.id,
    };
    await this.network.requestToBecomeFriends(request).then((res) => {
      console.log('getting res', res);
    });
  }
}
