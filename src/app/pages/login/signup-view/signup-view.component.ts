import {
  Component,
  Injector,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { BasePage } from '../../base/base';
import { AuthServiceService } from 'src/app/services/auth.service'; 
import firebase from 'firebase/compat/app';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-signup-view',
  templateUrl: './signup-view.component.html',
  styleUrls: ['./signup-view.component.scss'],
})
export class SignupViewComponent extends BasePage implements OnInit {
  constructor(injector: Injector,private authService: AuthServiceService, private alertController: AlertController,) {
    super(injector);
  }
  @Output() verify = new EventEmitter<string>();
  @Output() signInEvent = new EventEmitter<string>();
  fullName: string = '';
  email: string = '';
  phoneNumber: string = '';
  password: string = '';
  condition: boolean = false;
  params: any = this.nav.getQueryParams();
  role: string = this.params.type;



  OTP: string = '';
  Code: any;
  PhoneNo: any;
  CountryCode: any = '+91';
  showOTPInput: boolean = false;
  OTPmessage: string = 'An OTP is sent to your number. You should receive it in 15 s'
  recaptchaVerifier!: firebase.auth.RecaptchaVerifier;
  confirmationResult: any;

  ngOnInit() {}

  async signUp() {
    if (this.fullName == '') {
      this.utility.presentToast('enter full Name');
    } else if (this.email == '') {
      this.utility.presentToast('enter email');
    } else if (this.phoneNumber == '' || this.phoneNumber.length < 12) {
      this.utility.presentToast('enter correct Phone Number');
    } else if (this.password == '') {
      this.utility.presentToast('enter correct password');
    } else if (this.condition == false) {
      this.utility.presentToast('accept our Privacy policy');
    }
    const sU: any = await this.graphql.signUp(
      this.email,
      this.password,
      '+' + this.phoneNumber + '',
      this.fullName,
      this.role,
      'some address'
    );
    console.log('signUp', sU);

    // this.verify.emit();
  }

  signIn() {
    this.signInEvent.emit();
  }

  
  // async ionViewDidEnter() {
  //   this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
  //     size: 'invisible',
  //     callback: (response: any) => {
  //       console.log(response);
  //     },
  //     'expired-callback': () => {
  //     }
  //   });
  // }
  // ionViewDidLoad() {
  //   this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
  //     size: 'invisible',
  //     callback: (response: any) => {
  //       console.log(response);
  //     },
  //     'expired-callback': () => {
  //     }
  //   });
  // }

  // countryCodeChange($event: any) {
  //   this.CountryCode = $event.detail.value;
  // }
  // // Button event after the nmber is entered and button is clicked
  // signinWithPhoneNumber($event: any) {
  //   console.log('country', this.recaptchaVerifier);

  //   if (this.PhoneNo && this.CountryCode) {
  //     this.authService.signInWithPhoneNumber(this.recaptchaVerifier, "+923328815982").then(
  //       success => {
  //         this.OtpVerification();
  //       }
  //     );
  //   }
  // }
  // async showSuccess() {
  //   const alert = await this.alertController.create({
  //     header: 'Success',
  //     buttons: [
  //       {
  //         text: 'Ok',
  //         handler: (res) => {
  //           alert.dismiss();
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }
  // async OtpVerification() {
  //   const alert = await this.alertController.create({
  //     header: 'Enter OTP',
  //     backdropDismiss: false,
  //     inputs: [
  //       {
  //         name: 'otp',
  //         type: 'text',
  //         placeholder: 'Enter your otp',
  //       }
  //     ],
  //     buttons: [{
  //       text: 'Enter',
  //       handler: (res) => {
  //         this.authService.enterVerificationCode(res.otp).then(
  //           userData => {
  //             this.showSuccess();
  //             console.log(userData);
  //           }
  //         );
  //       }
  //     }
  //     ]
  //   });
  //   await alert.present();
  // }
}
