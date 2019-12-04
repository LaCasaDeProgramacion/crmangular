import { TestBed } from '@angular/core/testing';

import { PromotionServiceService } from './promotion-service.service';

describe('PromotionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromotionServiceService = TestBed.get(PromotionServiceService);
    expect(service).toBeTruthy();
  });
});
