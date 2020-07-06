import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";


describe('MenuService', () => {
  let service: MenuService;
  let httpMock: HttpTestingController;
  let mockResponse = {"data": [{"title": "Tus Productos", "urlLink": "home","itemNew": true,"enabled": true }]};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MenuService]
    });
    service = TestBed.inject(MenuService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
/*
  it('getProduct() should return main products', () => {

    service.getMenu().subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });
    const req = httpMock.expectOne('https://localhost:4200/assets/menu/menu.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
  */
});
