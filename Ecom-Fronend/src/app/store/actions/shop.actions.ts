import { ICart } from './../../models/ICart';
import { createAction, props } from '@ngrx/store';
import { ICardState } from 'src/app/models/ICardState';

export const loadShops = createAction('[Shop] Load Shops');

export const addCarts = createAction('[Shop] Add Carts'
, props<{cart: ICart}>);


export const getProducts = createAction('[Shop] GET Products')

export const getCarts = createAction("[Shop] Get Carts")

export const updateCarts = createAction("[Shop] Update Carts", props<{carts: Array<ICart>}>())

export const updateProducts = createAction(
  '[Shop] Update Products',
  props<{products: Array<ICardState>}>()
)
