import { Component, Injector, OnInit, Output, EventEmitter } from '@angular/core';
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
  email: string = ""
  password: string = ""

  @Output() signUpEvent = new EventEmitter<string>();

  ngOnInit() { }

  async signIn() {
    const lU: any = await this.graphql.loginUser(this.email, this.password);
    if (lU?.signIn.fullName) {
      const data = JSON.stringify(lU.signIn);
      this.storageService.set("currentUser", data);
      this.storageService.set("token", lU.signIn.token);
      this.storageService.set("type", lU.signIn.role);
      if (lU.signIn.role === "student") {
        this.nav.navigateTo('student');
      } else if (lU.signIn.role === "therapist") {
        this.nav.navigateTo('therapist');
      }
      this.nav.navigateTo('therapist');

    }
  }

  signUp() {
    this.signUpEvent.emit();
  }
}
