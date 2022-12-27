import { Component, Injector, OnInit,  Output, EventEmitter, ViewChild  } from '@angular/core';
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

  @ViewChild('ngOtpInput', { static: false}) ngOtpInput: any;
  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '*',
    inputStyles: {
      
    'height': '64px',
    'width': '64px',
    'border-radius': '8px',
    'background-color': '#1E2324',
    'text-align': 'center',
    'border': '#1E2324',
    'padding-bottom': '20px',
    'padding-top': '20px'
    }
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
