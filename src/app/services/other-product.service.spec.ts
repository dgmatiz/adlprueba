import {TestBed} from '@angular/core/testing';

import {OtherProductService} from './other-product.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {otherProduct, Product} from "../core/models/otherProduct";

describe('OtherProductService', () => {
  let service: OtherProductService;
  let httpMock: HttpTestingController;
  let mockResponse = [
    {title: "Cuenta Exprés >", icon: "directions_bike", urlLink: "home", enabled: true},
    {title: "Cuenta Protegida >", icon: "security", urlLink: "home", enabled: true},
    {title: "Tarjeta de Crédito >", icon: "credit_card", urlLink: "home", enabled: true},
    {title: "Compra de Cartera >", icon: "shopping_bag", urlLink: "home", enabled: true}
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OtherProductService]
    });
    service = TestBed.inject(OtherProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

/*
  it('getProduct() should return main products', () => {

    service.getProduct().subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });
    const req = httpMock.expectOne('https://localhost:4200/assets/menu/otherproducts.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
  */
});
