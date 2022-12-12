import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base/base';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit() {}

  goToShipping() {
    this.nav.navigateTo('student/shop/shipping-method');
  }
}
