import { IonText, IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { FriendSliderComponent } from './friend-slider.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FriendSliderComponent],
  imports: [CommonModule, SwiperModule, IonicModule],
  exports: [FriendSliderComponent],
})
export class FriendSliderModule {}
