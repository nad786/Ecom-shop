import { IShop } from './../../models/IShop';
import { IInitialApp } from './../../models/IInitilaApp';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectFeature = (InitialAppState: IInitialApp) => InitialAppState;

export const shopFeature = createSelector(
  selectFeature,
  (state: IInitialApp) => state.shopDetails
);

export const productFeature = createSelector(
  shopFeature,
  (state: IShop) => state.products
);

export const cartFeature = createSelector(
  shopFeature,
  (state: IShop) => state.carts
);
