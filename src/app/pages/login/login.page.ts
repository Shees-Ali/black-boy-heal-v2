import { Component, OnInit, ViewChild ,Injector} from '@angular/core';
import { BasePage } from '../base/base';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
   }
  currentUser: any
  signIn: boolean = true
  signUp: boolean = false
  phoneVerification: boolean = false



  async ngOnInit() {

  }

  signUP(){
    this.signIn = false;
    this.phoneVerification = false;
    this.signUp = true;
  }

  signIN(){
    this.signUp = false;
    this.phoneVerification = false;
    this.signIn = true;
  }

  changeNumber(){
    this.signIn = false;
    this.phoneVerification = false;
    this.signUp = true;
  }

  verified(){
    if(this.currentUser.role === "student"){
      this.nav.navigateTo('student');
    } else if(this.currentUser.role === "therapist"){
      this.nav.navigateTo('therapist');
    }
    // this.nav.navigateTo('splash');
  }

  verify(){
    this.signIn = false;
    this.signUp = false;
    this.phoneVerification = true;
  }

}
