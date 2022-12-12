import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvContentComponent } from './sv-content.component';

@NgModule({
  declarations: [SvContentComponent],
  imports: [CommonModule, IonicModule, SwiperModule],
  exports: [SvContentComponent],
})
export class SvContentModule {}
