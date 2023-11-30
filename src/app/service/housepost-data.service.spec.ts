import { TestBed } from '@angular/core/testing';

import { HousepostDataService } from './housepost-data.service';

describe('HousepostDataService', () => {
  let service: HousepostDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousepostDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
