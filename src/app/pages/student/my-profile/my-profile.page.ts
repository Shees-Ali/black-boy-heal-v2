import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base/base';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage extends BasePage implements OnInit {
[x: string]: any;
friends: any;

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
  }

  studentEditProfile(param = null){
    this.nav.push('student/student-edit-profile')
  }

  gotoaddfriends(peram = null){
    this.nav.push('/student/add-friend')
  }

}
