import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reps-slide',
  templateUrl: './reps-slide.component.html',
  styleUrls: ['./reps-slide.component.scss'],
})
export class RepsSlideComponent implements OnInit {

  @Output('slideNext') slideNext: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {}


  moveNext(){
    console.log("next");
    this.slideNext.emit({v: 3})
  }

}
