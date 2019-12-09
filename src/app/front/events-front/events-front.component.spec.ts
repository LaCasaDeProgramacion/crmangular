import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsFrontComponent } from './events-front.component';

describe('EventsFrontComponent', () => {
  let component: EventsFrontComponent;
  let fixture: ComponentFixture<EventsFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
