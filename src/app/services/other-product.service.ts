import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {otherProduct} from "../core/models/otherProduct";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OtherProductService {

  constructor(private httpClient: HttpClient) { }

  getProduct():Observable<otherProduct>{
    return this.httpClient.get<otherProduct>('./assets/menu/otherproducts.json');
  }
}
