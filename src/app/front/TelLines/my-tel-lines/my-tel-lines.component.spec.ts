import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTelLinesComponent } from './my-tel-lines.component';

describe('MyTelLinesComponent', () => {
  let component: MyTelLinesComponent;
  let fixture: ComponentFixture<MyTelLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTelLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTelLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
