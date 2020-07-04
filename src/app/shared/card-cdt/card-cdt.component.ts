import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-cdt',
  templateUrl: './card-cdt.component.html',
  styleUrls: ['./card-cdt.component.css']
})
export class CardCdtComponent implements OnInit {
  @Input() card: any;

  constructor() { }

  ngOnInit(): void {
  }

}
