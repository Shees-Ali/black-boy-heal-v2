import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentEditProfilePageRoutingModule } from './student-edit-profile-routing.module';

import { StudentEditProfilePage } from './student-edit-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    StudentEditProfilePageRoutingModule
  ],
  declarations: [StudentEditProfilePage]
})
export class StudentEditProfilePageModule {}
