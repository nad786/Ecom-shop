import { FacadeCardService } from './facade-card.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [FacadeCardService],
})
export class CardComponent implements OnInit {
  @Input() cardDetail: any = {};
  constructor(private facade: FacadeCardService) {}

  ngOnInit(): void {}

  addToCart() {
    this.facade.updateCart(this.cardDetail).subscribe((res) => {
      this.facade.dispatchGetCarts();
      this.facade.navigate('Cart');
    });
  }
}
