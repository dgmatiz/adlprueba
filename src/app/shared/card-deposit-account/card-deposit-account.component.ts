import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card-deposit-account',
  templateUrl: './card-deposit-account.component.html',
  styleUrls: ['./card-deposit-account.component.css']
})
export class CardDepositAccountComponent implements OnInit {
  @Input() card: any;
  @Output() btnDetails = new EventEmitter();

  constructor() {
  }

  detail() {
    this.btnDetails.emit(this.card)
  }

  ngOnInit(): void {
  }

}
