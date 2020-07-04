import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-credit-card',
  templateUrl: './card-credit-card.component.html',
  styleUrls: ['./card-credit-card.component.css']
})
export class CardCreditCardComponent implements OnInit {
  @Input() card: any;
  progressBarValue: any;

  constructor() { }

  ngOnInit(): void {
    this.progressBarValue = this.getProgress()
    console.log(this.progressBarValue)
  }

  getTypeCard() {
    if(this.card.id, this.card.id.search('^4[0-9]{6,}$') == 0){
      return './assets/images/visa.png'
    }
    if(this.card.id, this.card.id.search('^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$') == 0){
      return './assets/images/master.png'
    }
  }

  getTotalGastado() {
    return Math.abs(this.card.productAccountBalances.saldo_actual.amount);
  }

  getProgress() {
    return ((this.card.productAccountBalances.cupo_disponible_compras_pesos.amount+this.card.productAccountBalances.saldo_actual.amount)
      /this.card.productAccountBalances.cupo_disponible_compras_pesos.amount)*100;
  }

  getNumberCard(accountIdentifier: any) {
    return "XXXX XXXX XXXX " + accountIdentifier.substr(-4)
  }
}
