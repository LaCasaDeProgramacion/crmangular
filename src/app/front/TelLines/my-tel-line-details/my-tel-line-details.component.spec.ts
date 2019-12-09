import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTelLineDetailsComponent } from './my-tel-line-details.component';

describe('MyTelLineDetailsComponent', () => {
  let component: MyTelLineDetailsComponent;
  let fixture: ComponentFixture<MyTelLineDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTelLineDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTelLineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
