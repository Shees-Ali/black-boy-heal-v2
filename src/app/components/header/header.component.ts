import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('title') title: string = '';
  @Input('showBell') showBell: boolean = false;
  @Input('showMenu') showMenu: boolean = false;
  @Input('showBack') showBack: boolean = true;
  constructor() {}

  ngOnInit() {}
}
