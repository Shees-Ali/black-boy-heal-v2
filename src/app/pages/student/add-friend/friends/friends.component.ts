import { Component, Injector, Input, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base/base';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  @Input() data: any

  ngOnInit() {
    console.log("data",this.data)
  }

  async addFriend() {
    let data = {
      friend_id: this.data.id,
    };
    await this.network.requestToBecomeFriends(data).then((res) => {
      console.log('getting res', res);
    });
  }
}
