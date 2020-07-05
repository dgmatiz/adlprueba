import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CommunicatorService} from "../../services/communicator.service";
import {TypeAccount} from "../../core/models/typeAccount";
import {ModalComponent} from "../../shared/modal/modal.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(ModalComponent) modal:ModalComponent;
  accounts: any[] = []
  products: any[] = []
  viewcard: string = 'BANCO_2'
  selectProduct: boolean = false;
  detail: any[] = [];
  activeModal: any = false;

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

  getOtherBanks() {
    this.selectProduct = (this.selectProduct) ? false : true;
    if(this.selectProduct == true){
      this.getAllBanks()
    }
  }

  private getAllBanks() {

  }

  openModal($event: any) {
    this.detail = $event;
    this.modal.open(this.detail)
  }

  closeModal($event: any){
    this.detail = null
  }
}
