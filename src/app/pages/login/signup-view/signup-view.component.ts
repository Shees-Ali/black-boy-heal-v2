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
  errorMessage = "";

  constructor(injector: Injector) {
    super(injector);
    this.setupForm()
  }

  setupForm() {
    const re = /\S+@\S+\.\S+/;

    this.aForm = this.formBuilder.group({
      name: [
        '',
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(10),
          Validators.pattern('[a-zA-Z ]*'),
          Validators.required,
        ]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      // phone: ['', Validators.compose([Validators.required])],
      password: [
        '',
        Validators.compose([
          Validators.minLength(8),
          Validators.maxLength(30),
          Validators.required,
        ]),
      ],
      phone_number: [
        '',
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
    }

    // submit form with respect to signup





  }

  signIn(){

  }



}
