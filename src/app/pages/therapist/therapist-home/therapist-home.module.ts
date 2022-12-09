import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TherapistHomeComponent } from './therapist-home.component';
import { TherapistHomeRoutingModule } from './therapist-home-routing.module';

@NgModule({
  declarations: [TherapistHomeComponent],
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule,
    TherapistHomeRoutingModule,
  ],
  exports: [TherapistHomeComponent],
})
export class TherapistHomeModule {}
