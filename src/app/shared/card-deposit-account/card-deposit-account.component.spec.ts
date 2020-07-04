import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDepositAccountComponent } from './card-deposit-account.component';

describe('CardDepositAccountComponent', () => {
  let component: CardDepositAccountComponent;
  let fixture: ComponentFixture<CardDepositAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDepositAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDepositAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
