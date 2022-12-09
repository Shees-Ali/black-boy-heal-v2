import { IonicModule } from '@ionic/angular';
// import { HeaderModule } from './../header/HeaderModule';
// import { ShopProductComponent } from './../../../shop-product/shop-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopProductComponent } from './shop-product.component';
import { HeaderModule } from '../header/header.module';

// import { ShopProductComponent } from './.component';

@NgModule({
  declarations: [ShopProductComponent],
  imports: [CommonModule, HeaderModule, IonicModule],
  exports: [ShopProductComponent],
})
export class ShopProductModule {}
