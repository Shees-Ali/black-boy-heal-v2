import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TherapistProfilePageRoutingModule } from './therapist-profile-routing.module';

import { TherapistProfilePage } from './therapist-profile.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TherapistProfilePageRoutingModule,
    SharedModule
  ],
  declarations: [TherapistProfilePage]
})
export class TherapistProfilePageModule {}
