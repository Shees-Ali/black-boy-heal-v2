import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base/base';

@Component({
  selector: 'app-sv-content',
  templateUrl: './sv-content.component.html',
  styleUrls: ['./sv-content.component.scss'],
})
export class SvContentComponent extends BasePage implements OnInit {
  swiperConfig: any = {
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
      550: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 7,
        spaceBetween: 2,
      },
      700: {
        slidesPerView: 7,
        spaceBetween: 2,
      },
      800: {
        slidesPerView: 7,
        spaceBetween: 2,
      },
    },
  };
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {}

  bookAppointment() {
    this.nav.navigateTo('student/therapist-directory/appointments');
  }
}
