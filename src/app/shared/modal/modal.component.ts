import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TypeAccount} from "../../core/models/typeAccount";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterViewInit{
  card: any;
  @Input() modalActive: any;
  @Output() btnModal:any = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {

  }

  close() {
    this.modalActive = false;
    this.btnModal.emit();
  }

  open(detail) {
    this.card = detail
    this.modalActive = true;
    console.log("Que me llego===>",this.card)
  }
}
