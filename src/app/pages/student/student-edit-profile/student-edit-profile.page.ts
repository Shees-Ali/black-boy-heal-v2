import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { BasePage } from '../../base/base';

@Component({
  selector: 'app-student-edit-profile',
  templateUrl: './student-edit-profile.page.html',
  styleUrls: ['./student-edit-profile.page.scss'],
})
export class StudentEditProfilePage extends BasePage implements OnInit {
  aForm: FormGroup;
  constructor(injector: Injector) {
    super(injector);
    this.setupForm();
    this.getMyProfile();
  }

  ngOnInit() {}

  setupForm() {
    this.aForm = this.formBuilder.group({
      username: [
        '',
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(30),
          Validators.pattern('[a-zA-Z ]*'),
          Validators.required,
        ]),
      ],
      about: [
        '',
        Validators.compose([
          Validators.minLength(10),
          Validators.maxLength(120),
          Validators.pattern('[a-zA-Z ]*'),
          Validators.required,
        ]),
      ],

      // phone: ['', Validators.compose([Validators.required])],

      location: ['', Validators.compose([Validators.required])],
      phone_number: [
        Validators.compose([
          Validators.minLength(11),
          Validators.maxLength(11),
          Validators.required,
        ]),
      ],
      birthday: ['', Validators.compose([Validators.required])],
    });
  }

  async getMyProfile(){
    const res = await this.users.getUserProfile() as any;
    console.log(res);
    this.aForm.controls['username'].setValue(res['username'])
    this.aForm.controls['about'].setValue(res['about'])
    this.aForm.controls['birthday'].setValue(res['birthday'])
    this.aForm.controls['location'].setValue(res['location'])
  }



  async updateProfile() {
    if (this.aForm.invalid) {
      const err = this.formErrors.getFirstFormError(this.aForm);
      console.log('formerr:', err);
      this.utility.presentFailureToast(err);
      return;
    }
    // submit form with respect to signup
    let form = this.aForm.value;
    console.log('form:', form);

    const res = await this.users.updateUserProfile(form);
    console.log(res);










    // const res = await this.users.updateUserProfile(form);
    // if (res) {
      // this.nav.push('student/my-profile');
    // }


  }
}
