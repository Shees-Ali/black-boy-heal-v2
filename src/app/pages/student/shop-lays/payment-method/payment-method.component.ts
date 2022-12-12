import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base/base';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss'],
})
export class PaymentMethodComponent extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit() {}
}
