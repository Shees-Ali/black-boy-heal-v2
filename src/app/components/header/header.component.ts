import { Component, Injector, Input, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base/base';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BasePage implements OnInit {
  @Input('title') title: string = '';
  @Input('showBell') showBell: boolean = false;
  @Input('showMenu') showMenu: boolean = false;
  @Input('showBack') showBack: boolean = true;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {}

  back() {
    this.nav.pop();
  }
}
