import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reach-slide',
  templateUrl: './reach-slide.component.html',
  styleUrls: ['./reach-slide.component.scss'],
})
export class ReachSlideComponent implements OnInit {

  @Output('slideNext') slideNext: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {}


  moveNext(){
    console.log("next");
    this.slideNext.emit({v: 4})
  }

}
