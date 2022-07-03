import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CardsComponent } from './components/cards/cards.component';
import { ProductsComponent } from './components/products/products.component';
import { ShopComponent } from './components/shop/shop.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Shop',
    component: ShopComponent,
  },
  {
    path: 'Products',
    component: ProductsComponent,
  },
  {
    path: 'Cart',
    component: CardsComponent,
  },
  {
    path: 'Orders',
    component: OrdersComponent,
  },
  {
    path: 'Add Products',
    component: AddProductComponent,
  },
  {
    path: 'Admin Products',
    component: AdminProductsComponent,
  },
  {
    path: '',
    redirectTo: 'Shop',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
