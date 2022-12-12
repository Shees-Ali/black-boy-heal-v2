import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base/base';

@Component({
  selector: 'app-therapist-home',
  templateUrl: './therapist-home.component.html',
  styleUrls: ['./therapist-home.component.scss'],
})
export class TherapistHomeComponent extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit() {}

  goToProfile() {
    this.nav.navigateTo('therapist/therapist-profile')
  }
}
