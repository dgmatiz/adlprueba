import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CommunicatorService} from "../../services/communicator.service";
import {TypeAccount} from "../../core/models/typeAccount";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  accounts: any[] = []
  products: any[] = []
  viewcard: string = 'BANCO_1'

  constructor(private communicatorService: CommunicatorService) {
  }

  fillAccount() {
    this.products.forEach(row => {
      this.accounts[TypeAccount[row.typeAccount]] = this.products.filter(value => value.typeAccount === row.typeAccount)
    });
  }

  haveViewCard(value: any, viewcard: string) {
    let valbool = false
    value.map(x => {
      if (x.accountInformation.bank == viewcard) {
        valbool = true
      }
    })
    return valbool;
  }

  isTypeAcount(typeAccount: string, validateNumber: number) {
    return (TypeAccount[typeAccount] == validateNumber)
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.communicatorService.getData().subscribe((data: any) => {
      this.products = data.product
      this.fillAccount()
    })
  }
}
