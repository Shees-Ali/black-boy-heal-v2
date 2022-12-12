import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base/base';

@Component({
  selector: 'app-shipping-method',
  templateUrl: './shipping-method.component.html',
  styleUrls: ['./shipping-method.component.scss'],
})
export class ShippingMethodComponent extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit(): void {}

  goToPayment() {
    this.nav.navigateTo('student/shop/payment-method');
  }
}
