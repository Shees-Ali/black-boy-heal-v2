import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-content',
  templateUrl: './appointment-content.component.html',
  styleUrls: ['./appointment-content.component.scss'],
})
export class AppointmentContentComponent implements OnInit {
  swiperConfig: any = {
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
      500: {
        slidesPerView: 8,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 8,
        spaceBetween: 2,
      },
      650: {
        slidesPerView: 8,
        spaceBetween: 2,
      },
      700: {
        slidesPerView: 8,
        spaceBetween: 2,
      },
      800: {
        slidesPerView: 8,
        spaceBetween: 2,
      },
    },
  };

  constructor() {}

  ngOnInit() {}
}
