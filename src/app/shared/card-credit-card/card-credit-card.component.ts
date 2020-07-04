import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-credit-card',
  templateUrl: './card-credit-card.component.html',
  styleUrls: ['./card-credit-card.component.css']
})
export class CardCreditCardComponent implements OnInit {
  @Input() card: any;

  constructor() { }

  ngOnInit(): void {
  }

}
