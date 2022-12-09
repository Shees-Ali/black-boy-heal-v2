import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { Header2Module } from '../header2/header2.module';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [CommonModule, Header2Module, IonicModule],
  exports: [ProductsListComponent],
})
export class ProductsListModule {}
