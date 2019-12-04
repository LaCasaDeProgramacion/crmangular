import { TestBed } from '@angular/core/testing';

import { StatisticsComplaintService } from './statistics-complaint.service';

describe('StatisticsComplaintService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatisticsComplaintService = TestBed.get(StatisticsComplaintService);
    expect(service).toBeTruthy();
  });
});
