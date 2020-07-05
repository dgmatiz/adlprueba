import {Component, OnInit} from '@angular/core';
import {OtherProductService} from "../../services/other-product.service";
import {otherProduct} from "../../core/models/otherProduct";

@Component({
  selector: 'app-other-product',
  templateUrl: './other-product.component.html',
  styleUrls: ['./other-product.component.css']
})
export class OtherProductComponent implements OnInit {
  products: otherProduct

  constructor(private otherProductService: OtherProductService) {
  }

  ngOnInit(): void {
    this.otherProductService.getProduct().subscribe((result) => {
      this.products = result
      console.log("products=>",this.products)
    })
  }

}
