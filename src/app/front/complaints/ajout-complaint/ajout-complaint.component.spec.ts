import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutComplaintComponent } from './ajout-complaint.component';

describe('AjoutComplaintComponent', () => {
  let component: AjoutComplaintComponent;
  let fixture: ComponentFixture<AjoutComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
