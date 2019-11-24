import { TestBed } from '@angular/core/testing';

import { CarbrandService } from './carbrand.service';

describe('CarbrandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarbrandService = TestBed.get(CarbrandService);
    expect(service).toBeTruthy();
  });
});
