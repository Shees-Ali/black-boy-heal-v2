import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentContentComponent } from './appointment-content.component';

@NgModule({
  declarations: [AppointmentContentComponent],
  imports: [CommonModule, IonicModule, SwiperModule],
  exports: [AppointmentContentComponent],
})
export class AppointmentContentModule {}
