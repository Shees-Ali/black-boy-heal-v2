import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base/base';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.scss'],
})
export class ShopHomeComponent extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit() {}

  goToProductDetails() {
    this.nav.navigateTo('student/shop/shop-product');
  }
}
