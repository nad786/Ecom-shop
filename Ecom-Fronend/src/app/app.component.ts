import { SharedService } from './services/shared.service';
import { getProducts } from './store/actions/shop.actions';
import { IInitialApp } from './models/IInitilaApp';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Shop-Proj';

  constructor(
    private store: Store<IInitialApp>,
    private sharedservice: SharedService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sharedservice.dispatchGetProducts();
    this.sharedservice.dispatchGetCarts();
  }
}
