import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpackComponent } from './listpack.component';

describe('ListpackComponent', () => {
  let component: ListpackComponent;
  let fixture: ComponentFixture<ListpackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
