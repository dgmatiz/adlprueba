import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {CommunicatorService} from "../../services/communicator.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports:[HttpClientTestingModule, HttpTestingController],
      providers: [CommunicatorService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return an boolean with typeAccount equal validateNumber', () => {
    let validate = component.isTypeAcount('CREDIT_CARD', 2)
    fixture.whenStable().then(() => {
      expect(validate).toEqual(false);
    })
  });
});
