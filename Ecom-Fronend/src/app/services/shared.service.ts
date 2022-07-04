import { ICart } from './../models/ICart';
import { IInitialApp } from './../models/IInitilaApp';
import { ICardState } from './../models/ICardState';
import { Observable } from 'rxjs';
import {
  cartFeature,
  productFeature,
} from './../store/selectors/shop.selectors';
import { getCarts, getProducts } from './../store/actions/shop.actions';
import { select, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private store: Store<IInitialApp>) {}

  dispatchGetCarts() {
    this.store.dispatch(getCarts());
  }

  dispatchGetProducts() {
    this.store.dispatch(getProducts());
  }

  selectCarts(): Observable<Array<ICart>> {
    return this.store.pipe(select(cartFeature));
  }

  selectProducts(): Observable<Array<ICardState>> {
    return this.store.pipe(select(productFeature));
  }
}
