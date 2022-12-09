import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
// import { ShopHomeComponent } from './../../../shop-home/shop-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopHomeComponent } from './shop-home.component';

@NgModule({
  declarations: [ShopHomeComponent],
  imports: [CommonModule, SwiperModule, IonicModule],
  exports: [ShopHomeComponent],
})
export class ShopHomeModule {}
