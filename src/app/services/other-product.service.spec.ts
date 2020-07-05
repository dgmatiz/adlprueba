import { TestBed } from '@angular/core/testing';

import { OtherProductService } from './other-product.service';

describe('OtherProductService', () => {
  let service: OtherProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
