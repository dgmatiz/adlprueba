import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CommunicatorService} from "@adl/services/communicator.service";
import {TypeAccount} from "@adl/models/typeAccount";
import {ModalComponent} from "@adl/shared/modal/modal.component";
import {CarruselComponent} from "@adl/shared/carrusel/carrusel.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(ModalComponent) modal: ModalComponent;
  @ViewChild(CarruselComponent) carrusel: CarruselComponent;
  accounts: any[] = []
  products: any[] = []
  viewcard: string = 'BANCO_1'
  selectProduct: boolean = false;
  detail: any[] = [];
  activeModal: any = false;

  constructor(private communicatorService: CommunicatorService) {
  }

  fillAccount() {
    this.products.forEach(row => {
      this.accounts[TypeAccount[row.typeAccount]] = this.products.filter(value => value.typeAccount === row.typeAccount)
    });
    this.carrusel.resumen(false);
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

  getOtherBanks() {
    this.selectProduct = (this.selectProduct) ? false : true;
    this.carrusel.resumen(this.selectProduct);
  }

  openModal($event: any) {
    this.detail = $event;
    this.modal.open(this.detail)
  }

  closeModal($event: any) {
    this.detail = null
  }

  totalViewCard(value: any, viewcard: string) {
    if(this.selectProduct == false){
      return value.filter(x => x.accountInformation.bank == viewcard).length;
    }
    else{
      return value.length
    }
  }
}
