import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentMethodComponent } from './payment-method.component';
import { Header2Module } from '../header2/header2.module';

@NgModule({
  declarations: [PaymentMethodComponent],
  imports: [CommonModule, Header2Module, IonicModule],
  exports: [PaymentMethodComponent],
})
export class PaymentMethodModule {}
