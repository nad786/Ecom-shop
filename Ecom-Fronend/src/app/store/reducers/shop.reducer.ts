import { addCarts, updateProducts } from './../actions/shop.actions';
import { IShop } from './../../models/IShop';
import { Action, createReducer, on, props } from '@ngrx/store';

export const shopFeatureKey = 'shop';

export const initialState: IShop = {
  carts: [],
  products: [],
};

export const shopReducer = createReducer(
  initialState,
  on(addCarts, (state, props) => ({
    ...state,
    card: [...state.carts, props],
  })),
  on(updateProducts, (state, props: any) => ({
    ...state,
    products: props,
  }))
);
