import { getProducts, updateProducts } from './../actions/shop.actions';
import { IInitialApp } from 'src/app/models/IInitilaApp';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Injectable()
export class ShopEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private store: Store<IInitialApp>
  ) {}

  fetchProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProducts),
      switchMap(() => {
        return this.http.get('api/products').pipe(
          map((products: any) => {
            return updateProducts({ products: products.products });
          })
        );
      })
    )
  );
}
