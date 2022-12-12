import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TherapistDetailsPageRoutingModule } from './therapist-details-routing.module';

import { TherapistDetailsPage } from './therapist-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TherapistDetailsPageRoutingModule
  ],
  declarations: [TherapistDetailsPage]
})
export class TherapistDetailsPageModule {}
