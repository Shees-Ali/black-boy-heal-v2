import {
  Component,
  Injector,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { BasePage } from '../../base/base';

@Component({
  selector: 'app-signup-view',
  templateUrl: './signup-view.component.html',
  styleUrls: ['./signup-view.component.scss'],
})
export class SignupViewComponent extends BasePage implements OnInit {

  aForm: FormGroup;
  submitted = false;

  constructor(injector: Injector) {
    super(injector);
    this.setupForm()
  }

  setupForm() {
    const re = /\S+@\S+\.\S+/;

    this.aForm = this.formBuilder.group({
      name: [
        'lorem ipsum',
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(30),
          Validators.pattern('[a-zA-Z ]*'),
          Validators.required,
        ]),
      ],
      email: ['lorem@mail.com', Validators.compose([Validators.required, Validators.email])],
      // phone: ['', Validators.compose([Validators.required])],
      password: [
        '12345678',
        Validators.compose([
          Validators.minLength(8),
          Validators.maxLength(30),
          Validators.required,
        ]),
      ],
      phone_number: [
        '1234567890',
        Validators.compose([
          Validators.minLength(8),
          Validators.maxLength(15),
          Validators.required,
        ]),
      ],
      condition: [ true ],
    });
  }

  ngOnInit() {}

  async signUp() {

    if(this.aForm.invalid){
      const err = this.formErrors.getFirstFormError(this.aForm);
      this.utility.presentFailureToast(err);
      return;
    }

    // submit form with respect to signup
    let form = this.aForm.value
    const res = await this.users.register(form);
    if(res){
      this.nav.push('select-role');
    }






  }

  signIn(){

  }



}
