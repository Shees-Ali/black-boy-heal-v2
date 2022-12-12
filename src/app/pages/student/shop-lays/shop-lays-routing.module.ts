import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ShippingMethodComponent } from './shipping-method/shipping-method.component';
import { ShopHomeComponent } from './shop-home/shop-home.component';

import { ShopLaysPage } from './shop-lays.page';
import { ShopProductComponent } from './shop-product/shop-product.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shop-home',
  },

  {
    path: '',
    component: ShopLaysPage,
    children: [
      {
        path: 'shop-home',
        component: ShopHomeComponent,
      },
      {
        path: 'shop-product',
        component: ShopProductComponent,
      },
      {
        path: 'cart',
        component: ProductsListComponent,
      },
      {
        path: 'shipping-method',
        component: ShippingMethodComponent,
      },
      {
        path: 'payment-method',
        component: PaymentMethodComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopLaysPageRoutingModule {}
