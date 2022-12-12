import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-welcome-slide',
  templateUrl: './welcome-slide.component.html',
  styleUrls: ['./welcome-slide.component.scss'],
})
export class WelcomeSlideComponent implements OnInit {
  @Output('slideNext') slideNext: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
