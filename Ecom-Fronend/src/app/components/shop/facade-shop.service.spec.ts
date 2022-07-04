import { TestBed } from '@angular/core/testing';

import { FacadeShopService } from './facade-shop.service';

describe('FacadeShopService', () => {
  let service: FacadeShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacadeShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
