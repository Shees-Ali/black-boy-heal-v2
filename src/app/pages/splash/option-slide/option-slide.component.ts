import { Component, Injector, OnInit } from '@angular/core';
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
    if (type == 'student') {
      this.nav.navigateTo('student');
    } else if (type == 'therapist') {
      this.nav.navigateTo('therapist');
    }
  }
}
