import { Component, OnInit } from '@angular/core';
const images = require("./scrapbook.json")

@Component({
  selector: 'app-scrap-book',
  templateUrl: './scrap-book.component.html',
  styleUrls: ['./scrap-book.component.scss'],
})
export class ScrapBookComponent implements OnInit {

  slides = [];



  constructor() {
    this.slides = images;
  }

  ngOnInit() {

  }

}
