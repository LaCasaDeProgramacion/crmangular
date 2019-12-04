import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectbootstrapComponent } from './selectbootstrap.component';

describe('SelectbootstrapComponent', () => {
  let component: SelectbootstrapComponent;
  let fixture: ComponentFixture<SelectbootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectbootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectbootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
