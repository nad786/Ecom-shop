import { getCards } from './../../store/selectors/card.selectors';
import { ICardState } from './../../models/ICardState';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shop-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  cardDetails$: Observable<Array<ICardState>>;

  cardDetails = [];

  constructor(private store: Store<any>) {
    this.cardDetails$ = this.store.pipe(select(getCards));
  }
  ngOnInit(): void {}
}
