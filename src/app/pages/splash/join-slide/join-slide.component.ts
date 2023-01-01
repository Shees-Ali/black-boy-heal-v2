import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-join-slide',
  templateUrl: './join-slide.component.html',
  styleUrls: ['./join-slide.component.scss'],
})
export class JoinSlideComponent implements OnInit {

  @Output('slideNext') slideNext: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {}


  moveNext(){
    console.log("next");
    this.slideNext.emit({v: 5})
  }
}
