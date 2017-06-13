import { TestBed, inject } from '@angular/core/testing';

import { EstimateValidatorService } from './estimate-validator.service';

describe('EstimateValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstimateValidatorService]
    });
  });

  it('should be created', inject([EstimateValidatorService], (service: EstimateValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
