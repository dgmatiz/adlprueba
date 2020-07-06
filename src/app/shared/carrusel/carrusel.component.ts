import {Component, Input, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {Modal} from "@adl/models/modal";
import {TypeAccount} from "@adl/models/typeAccount";

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  @Input() cards: any;
  showAll:boolean = false
  totalAccount:Modal[] = []

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    dotsEach: 1,
    navSpeed: 200,
    items: 1,
    margin: 0,
    lazyLoad: true,
    nav: false,
    autoplay: true
  };

  constructor() {

  }

  resumen(value){
    this.showAll = value;
    this.totalAccount = []
    this.getResumenTotalByTypeAccount(3)
    this.getResumenTotalByTypeAccount(4)
  }

  getResumenTotalByTypeAccount(TypeAccountId){
    let totalAcc = 0
    let nameAcc = ''
    this.cards[TypeAccountId].filter( valueRow => {
      if(valueRow.accountInformation.bank == 'BANCO_1' ||  this.showAll){
        totalAcc = totalAcc + valueRow.productAccountBalances.saldo_disponible.amount
        nameAcc = valueRow.typeAccount
      }
    })
    this.totalAccount.push({title:TypeAccount[TypeAccountId], value: totalAcc.toString()})
  }

  ngOnInit(): void {
  }

}
