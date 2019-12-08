import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletetextComponent } from './autocompletetext.component';

describe('AutocompletetextComponent', () => {
  let component: AutocompletetextComponent;
  let fixture: ComponentFixture<AutocompletetextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompletetextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompletetextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
