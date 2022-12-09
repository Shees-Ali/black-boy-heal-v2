import { SwiperModule } from 'swiper/angular';
import { ProductsListModule } from './products-list/products-list.module';
// import { ShopProductModule } from './../../shop-product/shop-product.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopLaysPageRoutingModule } from './shop-lays-routing.module';

import { ShopLaysPage } from './shop-lays.page';
import { ShopHomeModule } from './shop-home/shop-home.module';
import { ShopProductModule } from './shop-product/shop-product.module';
import { HeaderModule } from './header/header.module';
import { ShippingMethodModule } from './shipping-method/shipping-method.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';
// import { ShopProductModule as ShopProductModule } from "./shop-product/shop-product.module";

@NgModule({
  declarations: [ShopLaysPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopLaysPageRoutingModule,
    ShopHomeModule,
    ShopProductModule,
    HeaderModule,
    ProductsListModule,
    ShippingMethodModule,
    PaymentMethodModule,
    SwiperModule,
  ],
})
export class ShopLaysPageModule {}
