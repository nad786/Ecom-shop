import { SharedService } from './../../services/shared.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FacadeShopService {
  constructor(private sharedService: SharedService) {}

  selectProducts() {
    return this.sharedService.selectProducts();
  }
}
