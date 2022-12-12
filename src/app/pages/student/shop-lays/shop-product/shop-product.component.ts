import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base/base';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.scss'],
})
export class ShopProductComponent extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit() {}

  onIncrement() {}

  onDecrement() {}

  goToCart() {
    this.nav.navigateTo('student/shop/shipping-method');
  }
}
