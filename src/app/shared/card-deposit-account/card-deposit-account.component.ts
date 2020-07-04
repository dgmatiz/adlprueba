import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-deposit-account',
  templateUrl: './card-deposit-account.component.html',
  styleUrls: ['./card-deposit-account.component.css']
})
export class CardDepositAccountComponent implements OnInit {
  @Input() card: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
