import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  constructor() {}

  ngOnInit() {}

  gotoPV() {
    this.swiper?.swiperRef.slideTo(2);
  }

  gotoSignup() {
    this.swiper?.swiperRef.slideTo(1);
  }

  gotoLogin() {
    this.swiper?.swiperRef.slideTo(0);
  }
}
