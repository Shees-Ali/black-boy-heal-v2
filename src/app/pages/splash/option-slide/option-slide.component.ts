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

  goTo(select: string) {
    this.nav.navigateTo(select);
  }
}
