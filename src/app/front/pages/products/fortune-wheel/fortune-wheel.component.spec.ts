import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FortuneWheelComponent } from './fortune-wheel.component';

describe('FortuneWheelComponent', () => {
  let component: FortuneWheelComponent;
  let fixture: ComponentFixture<FortuneWheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortuneWheelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortuneWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
