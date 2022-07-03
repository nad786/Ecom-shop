import { ICardState } from './ICardState';
import { ICart } from './ICart';

export interface IShop {
  carts: Array<ICart>;
  products: Array<ICardState>;
}
