import { TestBed } from '@angular/core/testing';

import { ServiceLineService } from './service-line.service';

describe('ServiceLineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceLineService = TestBed.get(ServiceLineService);
    expect(service).toBeTruthy();
  });
});
