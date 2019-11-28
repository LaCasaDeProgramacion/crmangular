import { TestBed } from '@angular/core/testing';

import { ComplaintObjectsService } from './complaint-objects.service';

describe('ComplaintObjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComplaintObjectsService = TestBed.get(ComplaintObjectsService);
    expect(service).toBeTruthy();
  });
});
