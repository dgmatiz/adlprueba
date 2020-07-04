import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalMainComponent } from './principal-main.component';

describe('PrincipalMainComponent', () => {
  let component: PrincipalMainComponent;
  let fixture: ComponentFixture<PrincipalMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
