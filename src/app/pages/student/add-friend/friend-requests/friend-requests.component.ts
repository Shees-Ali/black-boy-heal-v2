import { Component, Injector, Input, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base/base';

@Component({
  selector: 'app-friend-requests',
  templateUrl: './friend-requests.component.html',
  styleUrls: ['./friend-requests.component.scss'],
})
export class FriendRequestsComponent extends BasePage implements OnInit {
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
