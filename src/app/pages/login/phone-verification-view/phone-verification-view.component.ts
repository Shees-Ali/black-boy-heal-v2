import { Component, Injector, OnInit,  Output, EventEmitter  } from '@angular/core';
import { BasePage } from '../../base/base';


@Component({
  selector: 'app-phone-verification-view',
  templateUrl: './phone-verification-view.component.html',
  styleUrls: ['./phone-verification-view.component.scss'],
})
export class PhoneVerificationViewComponent extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  @Output() changeNumberEvent = new EventEmitter<string>();
  @Output() verified = new EventEmitter<string>();

  ngOnInit() {}

  change() {
    this.changeNumberEvent.emit();
  }

  verify() {
    this.verified.emit();
  }

  Resend(){
    
  }

}
