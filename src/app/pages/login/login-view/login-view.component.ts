import { Component, Injector, OnInit, Output, EventEmitter } from '@angular/core';
import { BasePage } from '../../base/base';
import { graphql } from 'src/app/services/graphql';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
})

export class LoginViewComponent extends BasePage implements OnInit {
  constructor(injector: Injector,private ql: graphql) {
    super(injector);
  }
  email:string = ""
  password:string =""

  @Output() signUpEvent = new EventEmitter<string>();

  ngOnInit() {
  }

  async signIn() {
    const lU = await this.ql.loginUser(this.email,this.password);
  }

  signUp() {
    this.signUpEvent.emit();
  }
}
