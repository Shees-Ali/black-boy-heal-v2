import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-care-slide',
  templateUrl: './care-slide.component.html',
  styleUrls: ['./care-slide.component.scss'],
})
export class CareSlideComponent implements OnInit {

  @Output('slideNext') slideNext: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  moveNext(){
    console.log("next");
    this.slideNext.emit({v: 2})
  }

}
