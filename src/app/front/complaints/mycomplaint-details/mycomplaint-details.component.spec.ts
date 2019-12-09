import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomplaintDetailsComponent } from './mycomplaint-details.component';

describe('MycomplaintDetailsComponent', () => {
  let component: MycomplaintDetailsComponent;
  let fixture: ComponentFixture<MycomplaintDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycomplaintDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycomplaintDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
