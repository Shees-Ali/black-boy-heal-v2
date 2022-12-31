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

    console.log(this.aForm.invalid);

    this.submitted = true;

    if(this.aForm.invalid){

      const res = await this.findInvalidControls(this.aForm);
      console.log(res);

      let first = res[0];

      let label = first['con'];

      if(first.error?.['required']){
        this.errorMessage = label + " is required";
      }

      if(first.error?.['minlength']){
        this.errorMessage = label + " at least " + first.error?.['minlength'].requiredLength + " characters";
      }

      if(first.error?.['maxlength']){
        this.errorMessage = label + " at most " + first.error?.['maxlength'].requiredLength + " characters";
      }

      if(first.error?.['pattern']){
        this.errorMessage = label + " should be like " + first.error?.['pattern'].requiredPattern + " pattern";
      }

      this.utility.presentFailureToast(this.errorMessage);
    }




  }

  signIn(){

  }

  findInvalidControls(f: FormGroup) {
    const invalid = [];
    const controls = f.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push({
          con: name,
          error: controls[name].errors
        });
      }
    }
    return invalid;
  }

}
