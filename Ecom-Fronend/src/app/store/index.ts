import { shopReducer } from './reducers/shop.reducer';
import { IInitialApp } from './../models/IInitilaApp';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

export const reducers: ActionReducerMap<IInitialApp> = {
  shopDetails: shopReducer,
};

export const metaReducers: MetaReducer<IInitialApp>[] = !environment.production
  ? []
  : [];
