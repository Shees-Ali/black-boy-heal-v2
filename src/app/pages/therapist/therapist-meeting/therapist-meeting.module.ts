import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TherapistMeetingPageRoutingModule } from './therapist-meeting-routing.module';

import { TherapistMeetingPage } from './therapist-meeting.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TherapistMeetingPageRoutingModule,
    SharedModule,
  ],
  declarations: [TherapistMeetingPage],
})
export class TherapistMeetingPageModule {}
