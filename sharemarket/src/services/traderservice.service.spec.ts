import { TestBed } from '@angular/core/testing';

import { TraderserviceService } from './traderservice.service';

describe('TraderserviceService', () => {
  let service: TraderserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraderserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
