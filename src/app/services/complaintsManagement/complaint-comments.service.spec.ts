import { TestBed } from '@angular/core/testing';

import { ComplaintCommentsService } from './complaint-comments.service';

describe('ComplaintCommentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComplaintCommentsService = TestBed.get(ComplaintCommentsService);
    expect(service).toBeTruthy();
  });
});
