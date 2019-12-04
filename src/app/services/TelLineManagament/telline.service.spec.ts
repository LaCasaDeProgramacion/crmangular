import { TestBed } from '@angular/core/testing';

import { TellineService } from './telline.service';

describe('TellineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TellineService = TestBed.get(TellineService);
    expect(service).toBeTruthy();
  });
});
