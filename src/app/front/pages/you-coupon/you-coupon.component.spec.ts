import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouCouponComponent } from './you-coupon.component';

describe('YouCouponComponent', () => {
  let component: YouCouponComponent;
  let fixture: ComponentFixture<YouCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
