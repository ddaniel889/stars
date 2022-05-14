import { TestBed } from '@angular/core/testing';

import { StarsDataService } from './stars-data.service';

describe('StarsDataService', () => {
  let service: StarsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
