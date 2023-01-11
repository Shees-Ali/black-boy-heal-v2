import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.page.html',
  styleUrls: ['./add-friend.page.scss'],
})
export class AddFriendPage implements OnInit {
  currDiv: string = 'A';

  friendList: any[] = [];


  requestlist: any[] = [];

  myfriendList: any[] = [];

  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }

  constructor(private network: NetworkService) {}

  async ngOnInit() {
    await this.network.getAllUsers().then((res) => {
      this.friendList = res;
      console.log('getting friends', res);
    });

    const data = {
      request_id: 1,
      approved: 1,
    };

    await this.network.getMyFriendRequest().then((res) => {
      this.requestlist = res;
      console.log('Requests');
    });

    await this.network.getMyFriendRequest().then((res) => {
      this.myfriendList = res;
      console.log('Requests');
    });
  }
}
