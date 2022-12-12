import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base/base';

@Component({
  selector: 'app-signup-view',
  templateUrl: './signup-view.component.html',
  styleUrls: ['./signup-view.component.scss'],
})
export class SignupViewComponent extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {}

  signUp() {
    this.nav.navigateTo('splash');
  }
}
