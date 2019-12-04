import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TellinDetailComponent } from './tellin-detail.component';

describe('TellinDetailComponent', () => {
  let component: TellinDetailComponent;
  let fixture: ComponentFixture<TellinDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellinDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
