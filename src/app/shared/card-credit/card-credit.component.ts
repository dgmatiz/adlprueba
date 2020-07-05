import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-card-credit',
  templateUrl: './card-credit.component.html',
  styleUrls: ['./card-credit.component.css']
})
export class CardCreditComponent implements OnInit {
  @Input() card: any;
  @Output() btnDetails = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

}
