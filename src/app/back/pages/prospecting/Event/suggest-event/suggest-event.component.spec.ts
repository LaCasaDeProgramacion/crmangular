import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestEventComponent } from './suggest-event.component';

describe('SuggestEventComponent', () => {
  let component: SuggestEventComponent;
  let fixture: ComponentFixture<SuggestEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
