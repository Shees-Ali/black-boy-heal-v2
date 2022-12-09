import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentProfilesPageRoutingModule } from './student-profiles-routing.module';

import { StudentProfilesPage } from './student-profiles.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentProfilesPageRoutingModule,
    SharedModule
  ],
  declarations: [StudentProfilesPage],
})
export class StudentProfilesPageModule {}
