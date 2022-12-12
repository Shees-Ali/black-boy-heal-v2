import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base/base';

@Component({
  selector: 'app-therapist-directory',
  templateUrl: './therapist-directory.page.html',
  styleUrls: ['./therapist-directory.page.scss'],
})
export class TherapistDirectoryPage extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit() {}

  details() {
    this.nav.navigateTo('student/therapist-directory/therapist-details');
  }
}
