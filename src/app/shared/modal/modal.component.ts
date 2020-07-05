import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Modal} from "../../core/models/modal";
//import {MaskcardPipe} from "../../pipes/maskcard.pipe";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterViewInit {
  card: any;
  @Input() modalActive: any;
  @Output() btnModal: any = new EventEmitter();
  accountInformation: Modal[]=[]
  productAccountBalances: Modal[]=[]

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  close() {
    this.productAccountBalances = []
    this.modalActive = false;
    this.btnModal.emit();
  }

  open(detail) {
    this.card = detail
    this.modalActive = true;
    this.getAccountBalances()
  }

  private getAccountBalances() {
    for (let key in this.card.productAccountBalances) {
      this.productAccountBalances.push({title: key, value: this.card.productAccountBalances[key].amount})
    }

  }
}
