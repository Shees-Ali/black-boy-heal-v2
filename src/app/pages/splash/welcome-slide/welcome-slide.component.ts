import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-welcome-slide',
  templateUrl: './welcome-slide.component.html',
  styleUrls: ['./welcome-slide.component.scss'],
})
export class WelcomeSlideComponent implements OnInit {
  @Output('slideNext') slideNext: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  moveNext(){
    console.log("next");
    this.slideNext.emit({v: 1})
  }
}
