import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base/base';

@Component({
  selector: 'app-dashboard-find-therapist-box',
  templateUrl: './dashboard-find-therapist-box.component.html',
  styleUrls: ['./dashboard-find-therapist-box.component.scss'],
})
export class DashboardFindTherapistBoxComponent
  extends BasePage
  implements OnInit
{
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {}

  goToTherapists() {
    this.nav.navigateTo('student/therapist-directory');
  }
}
