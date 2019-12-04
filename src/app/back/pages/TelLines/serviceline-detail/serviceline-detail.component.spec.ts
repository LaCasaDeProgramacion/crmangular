import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicelineDetailComponent } from './serviceline-detail.component';

describe('ServicelineDetailComponent', () => {
  let component: ServicelineDetailComponent;
  let fixture: ComponentFixture<ServicelineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicelineDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicelineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
