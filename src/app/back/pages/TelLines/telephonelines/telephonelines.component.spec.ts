import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephonelinesComponent } from './telephonelines.component';

describe('TelephonelinesComponent', () => {
  let component: TelephonelinesComponent;
  let fixture: ComponentFixture<TelephonelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelephonelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephonelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
