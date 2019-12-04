import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesLinesComponent } from './services-lines.component';

describe('ServicesLinesComponent', () => {
  let component: ServicesLinesComponent;
  let fixture: ComponentFixture<ServicesLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
