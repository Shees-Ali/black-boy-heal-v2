import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base/base';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
})
export class LoginViewComponent extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {}

  signIn() {
    this.nav.navigateTo('splash');
  }
}
