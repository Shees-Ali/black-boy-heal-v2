import { Component, Injector, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { BasePage } from '../../base/base';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
})

export class LoginViewComponent extends BasePage implements OnInit {

  aForm: FormGroup;
  submitted = false;

  @Output() signUpEvent = new EventEmitter<string>();

  constructor(injector: Injector) {
    super(injector);
    this.setupForm()
  }

  setupForm() {
    const re = /\S+@\S+\.\S+/;

    this.aForm = this.formBuilder.group({
      email: ['lorem259@mail.com', Validators.compose([Validators.required, Validators.email])],
      password: [
        '12345678',
        Validators.compose([
          Validators.minLength(8),
          Validators.maxLength(30),
          Validators.required,
        ]),
      ],
    });
  }

  ngOnInit() { }

  async signIn() {

    if(this.aForm.invalid){
      const err = this.formErrors.getFirstFormError(this.aForm);
      this.utility.presentFailureToast(err);
      return;
    }

    // submit form with respect to signup
    let form = this.aForm.value
    const res = await this.users.login(form);

    if(res){

      // if(res['role'].name == 'student'){
        this.nav.navigateTo('student');
      // } else if(res['role'].name == 'therapist'){
      //   this.nav.navigateTo('therapist');
      // } else{
      //   this.nav.push('select-role');
      // }

    }



  }


  signUp() {
    this.signUpEvent.emit();
  }

}
