import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeComplaintComponent } from './type-complaint.component';

describe('TypeComplaintComponent', () => {
  let component: TypeComplaintComponent;
  let fixture: ComponentFixture<TypeComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
