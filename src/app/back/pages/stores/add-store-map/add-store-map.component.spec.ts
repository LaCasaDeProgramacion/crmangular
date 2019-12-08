import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStoreMapComponent } from './add-store-map.component';

describe('AddStoreMapComponent', () => {
  let component: AddStoreMapComponent;
  let fixture: ComponentFixture<AddStoreMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStoreMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStoreMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
