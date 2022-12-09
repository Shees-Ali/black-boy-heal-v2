import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopLaysPage } from './shop-lays.page';

const routes: Routes = [
  {
    path: '',
    component: ShopLaysPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopLaysPageRoutingModule {}
