import { SharedService } from './../../services/shared.service';
import { ICardState } from './../../models/ICardState';
import { HttpService } from '../../services/http.service';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable()
export class FacadeCardService {
  constructor(
    private http: HttpService,
    private route: Router,
    private sharedService: SharedService
  ) {}

  updateCart(cardDetail: ICardState) {
    return this.http.post('api/cart', { productId: cardDetail.productId });
  }

  navigate(path: string) {
    this.route.navigate(['/', path]);
  }

  dispatchGetCarts() {
    this.sharedService.dispatchGetCarts();
  }
}
