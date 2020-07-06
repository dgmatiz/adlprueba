import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Modal} from "../../core/models/modal";


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  card: any;
  @Input() modalActive: any;
  @Output() btnModal: any = new EventEmitter();
  accountInformation: Modal[]=[]
  productAccountBalances: Modal[]=[]

  constructor() {
  }

  ngOnInit(): void {
  }

  close() {
    this.productAccountBalances = []
    this.modalActive = false;
    this.btnModal.emit();
  }

  open(detail) {
    this.card = detail
    this.modalActive = true;
    this.productAccountBalances = this.getAccountBalances(detail)
  }

  getAccountBalances(detail) {
    let modalArray: Modal[]=[]
    for (let key in detail.productAccountBalances) {
      modalArray.push({title: key, value: detail.productAccountBalances[key].amount})
    }
    return modalArray;
  }
}
