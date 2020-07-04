import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCdtComponent } from './card-cdt.component';

describe('CardCdtComponent', () => {
  let component: CardCdtComponent;
  let fixture: ComponentFixture<CardCdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
