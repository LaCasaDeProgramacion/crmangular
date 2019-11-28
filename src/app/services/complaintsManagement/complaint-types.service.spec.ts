import { TestBed } from '@angular/core/testing';

import { ComplaintTypesService } from './complaint-types.service';

describe('ComplaintTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComplaintTypesService = TestBed.get(ComplaintTypesService);
    expect(service).toBeTruthy();
  });
});
