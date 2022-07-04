import { TestBed } from '@angular/core/testing';

import { FacadeCartsService } from './facade-carts.service';

describe('FacadeCartsService', () => {
  let service: FacadeCartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacadeCartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
