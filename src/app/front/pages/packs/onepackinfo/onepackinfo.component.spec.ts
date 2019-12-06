import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepackinfoComponent } from './onepackinfo.component';

describe('OnepackinfoComponent', () => {
  let component: OnepackinfoComponent;
  let fixture: ComponentFixture<OnepackinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnepackinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnepackinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
