import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectComplaintComponent } from './object-complaint.component';

describe('ObjectComplaintComponent', () => {
  let component: ObjectComplaintComponent;
  let fixture: ComponentFixture<ObjectComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
