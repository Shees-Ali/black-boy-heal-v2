import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { BasePage } from '../base/base';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage extends BasePage implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {}

  slideNext() {
    console.log("HERE");
    this.swiper?.swiperRef.slideNext();
  }
}
