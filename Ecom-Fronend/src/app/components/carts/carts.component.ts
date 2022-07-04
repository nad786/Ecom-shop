import { FacadeCartsService } from './facade-carts.service';
import { ICart } from './../../models/ICart';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shop-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss'],
})
export class CartsComponent implements OnInit {
  cartDetails$: Observable<Array<ICart>>;
  constructor(private facade: FacadeCartsService) {
    this.cartDetails$ = this.facade.selectCarts();
  }

  ngOnInit(): void {}
}
