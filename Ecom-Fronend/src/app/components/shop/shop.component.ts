import { FacadeShopService } from './facade-shop.service';
import { FacadeCardService } from './../card/facade-card.service';
import { ICardState } from './../../models/ICardState';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { productFeature } from 'src/app/store/selectors/shop.selectors';

@Component({
  selector: 'shop-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  cardDetails$: Observable<Array<ICardState>>;

  cardDetails = [];

  constructor(private facde: FacadeShopService) {
    this.cardDetails$ = this.facde.selectProducts();
  }
  ngOnInit(): void {}
}
