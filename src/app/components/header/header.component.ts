import {Component, effect, inject} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {HeaderTopComponent} from './header-top/header-top.component';
import {HeaderMainComponent} from './header-main/header-main.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    HeaderTopComponent,
    HeaderMainComponent
  ],
  styleUrls: ['./header.component.scss'] // Fixed styleUrls
})
export class HeaderComponent {
  private readonly cartService = inject(CartService);

  cartItems:any;

  constructor() {
    effect(() => {
      this.cartItems =  this.cartService.getCart()
    });
  }
}
