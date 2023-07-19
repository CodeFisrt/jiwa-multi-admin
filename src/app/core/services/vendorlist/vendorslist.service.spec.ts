import { TestBed } from '@angular/core/testing';

import { VendorslistService } from './vendorslist.service';

describe('VendorslistService', () => {
  let service: VendorslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
