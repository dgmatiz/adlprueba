import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherProductComponent } from './other-product.component';

describe('OtherProductComponent', () => {
  let component: OtherProductComponent;
  let fixture: ComponentFixture<OtherProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
