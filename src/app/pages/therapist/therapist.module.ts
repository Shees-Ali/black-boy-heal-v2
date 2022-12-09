import { SwiperModule } from 'swiper/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TherapistPageRoutingModule } from './therapist-routing.module';

import { TherapistPage } from './therapist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TherapistPageRoutingModule,
    SwiperModule,
  ],
  declarations: [TherapistPage],
})
export class TherapistPageModule {}
