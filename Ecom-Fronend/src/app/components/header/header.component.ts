import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headers: Array<string> = [
    'Shop',
    'Products',
    'Cart',
    'Orders',
    'Add Products',
    'Admin Products',
  ];
  selectedHeader = 'Shop';
  constructor() {}

  ngOnInit(): void {}
}
