import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.page.html',
  styleUrls: ['./add-friend.page.scss'],
})
export class AddFriendPage implements OnInit {
  currDiv: string = 'A';

  array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }

  constructor() { }

  ngOnInit() {

  }

}
