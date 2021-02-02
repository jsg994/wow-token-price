import { TestBed } from '@angular/core/testing';

import { BnetService } from './bnet.service';

describe('BnetService', () => {
  let service: BnetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BnetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
