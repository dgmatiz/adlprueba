import {Component, Input, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  @Input() cards: any;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    dotsEach: 1,
    navSpeed: 700,
    items: 1,
    margin: 75,
    lazyLoad: true,
    nav: false,
  };

  constructor() {
  }

  getResumen(){
    this.cards.map()
  }

  ngOnInit(): void {
  }

}
