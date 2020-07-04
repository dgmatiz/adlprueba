import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-credit',
  templateUrl: './card-credit.component.html',
  styleUrls: ['./card-credit.component.css']
})
export class CardCreditComponent implements OnInit {
  @Input() card: any;

  constructor() { }

  ngOnInit(): void {
  }

}
