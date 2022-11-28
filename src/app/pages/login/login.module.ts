import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { SwiperModule } from 'swiper/angular';
import { LoginViewComponent } from './login-view/login-view.component';
import { SignupViewComponent } from './signup-view/signup-view.component';
import { PhoneVerificationViewComponent } from './phone-verification-view/phone-verification-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    SwiperModule,
  ],
  declarations: [
    LoginPage,
    LoginViewComponent,
    SignupViewComponent,
    PhoneVerificationViewComponent,
  ],
})
export class LoginPageModule {}
