import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TherapistDetailsPageRoutingModule } from './therapist-details-routing.module';

import { TherapistDetailsPage } from './therapist-details.page';
import { SvContentModule } from './sv-content/sv-content.module';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TherapistDetailsPageRoutingModule,
    SvContentModule,
    SharedModule,
  ],
  declarations: [TherapistDetailsPage],
})
export class TherapistDetailsPageModule {}
