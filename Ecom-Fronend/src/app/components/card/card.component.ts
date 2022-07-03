import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cardDetail: any = {};
  constructor() {}

  ngOnInit(): void {}
}
