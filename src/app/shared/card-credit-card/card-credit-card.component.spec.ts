import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreditCardComponent } from './card-credit-card.component';

describe('CardCreditCardComponent', () => {
  let component: CardCreditCardComponent;
  let fixture: ComponentFixture<CardCreditCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCreditCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
