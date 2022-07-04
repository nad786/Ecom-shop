import { SharedService } from './../../services/shared.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FacadeCartsService {
  constructor(private sharedService: SharedService) {}

  selectCarts() {
    return this.sharedService.selectCarts();
  }
}
