import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-current-account',
  templateUrl: './card-current-account.component.html',
  styleUrls: ['./card-current-account.component.css']
})
export class CardCurrentAccountComponent implements OnInit {
  @Input() card: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  getTextBalance() {
    let textBalance: string
    if (this.card.productAccountBalances.saldo_disponible.amount < 0) {
      textBalance = "En Sobregiro:";
    } else {
      textBalance = "Saldo disponible:";
    }
    return textBalance;
  }
}
