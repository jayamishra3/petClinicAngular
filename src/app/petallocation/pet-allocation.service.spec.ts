import { TestBed } from '@angular/core/testing';

import { PetAllocationService } from './pet-allocation.service';

describe('PetAllocationService', () => {
  let service: PetAllocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetAllocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
