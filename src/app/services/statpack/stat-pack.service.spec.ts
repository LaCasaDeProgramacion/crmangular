import { TestBed } from '@angular/core/testing';

import { StatPackService } from './stat-pack.service';

describe('StatPackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatPackService = TestBed.get(StatPackService);
    expect(service).toBeTruthy();
  });
});
