import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalComponent} from './modal.component';
import {Modal} from "../../core/models/modal";

fdescribe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('assignAccountBalances(detail) should return a modalArray', () => {
    let detail = {
      status: "ACTIVE",
      productAccountBalances: {
        saldo_canje: {amount: "1"}
      }
    }

    let resultSimulate:Modal[] = [{title: 'saldo_canje', value: '1'}];
    let result = component.getAccountBalances(detail)
    expect(result).toEqual(resultSimulate);
  });

});
