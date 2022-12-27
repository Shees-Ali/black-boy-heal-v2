import { Component, Injector, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { BasePage } from '../../base/base';

@Component({
  selector: 'app-option-slide',
  templateUrl: './option-slide.component.html',
  styleUrls: ['./option-slide.component.scss'],
})
export class OptionSlideComponent extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {}

  goTo(type: string) {
    let extras: NavigationExtras = {
      queryParams: {type:type},
    };
    if (type == 'student') {
      this.nav.navigateTo('login',extras);
    } else if (type == 'therapist') {
      this.nav.navigateTo('login',extras);
    }
  }
}
