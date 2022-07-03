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

  constructor(private store: Store<IInitialApp>) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store.dispatch(getProducts());
  }
}
