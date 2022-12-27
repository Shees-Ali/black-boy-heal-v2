import { Component, Injector, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() verify = new EventEmitter<string>();
  @Output() signInEvent = new EventEmitter<string>();
  fullName: string = ""
  email: string = ""
  phoneNumber:string= ""
  password:string = ""
  condition:boolean = false

  ngOnInit() {}

  async signUp() {
    if(this.fullName == ""){
      this.utility.presentToast("enter full Name")
    } else
    if(this.email == ""){
      this.utility.presentToast("enter email")

    } else
    if(this.phoneNumber == "" || this.phoneNumber.length < 12){
      this.utility.presentToast("enter correct Phone Number")

    } else
    if(this.password == ""){
      this.utility.presentToast("enter correct password")

    } else
    if(this.condition == false){
      this.utility.presentToast("accept our Privacy policy")
    }
    const lU:any = await this.graphql.loginUser(this.email,this.password);

    // this.verify.emit();
  }

  signIn() {
    this.signInEvent.emit();
  }
}
