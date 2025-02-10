import {Component, effect} from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartItems: any[] = [];

  constructor (private cartService: CartService){
    effect(() => {
      this.cartItems = this.cartService.getCart();
    });
  };

  ngOnInit(){
    this.cartItems = this.cartService.getCart();
  }
}
