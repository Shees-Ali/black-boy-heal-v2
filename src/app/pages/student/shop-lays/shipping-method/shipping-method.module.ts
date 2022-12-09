import { IonicModule } from '@ionic/angular';
import { Header2Module } from '../header2/header2.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingMethodComponent } from './shipping-method.component';

@NgModule({
  declarations: [ShippingMethodComponent],
  imports: [CommonModule, Header2Module, IonicModule],
  exports: [ShippingMethodComponent],
})
export class ShippingMethodModule {}
