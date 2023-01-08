import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-dashboard-myprofile-box',
  templateUrl: './dashboard-myprofile-box.component.html',
  styleUrls: ['./dashboard-myprofile-box.component.scss'],
})
export class DashboardMyprofileBoxComponent implements OnInit {


  constructor(public nav: NavService) { }

  ngOnInit() {}

  gotoMyProfile(){
    this.nav.push('/student/my-profile')
  }

}
