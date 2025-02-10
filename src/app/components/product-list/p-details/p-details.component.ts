import {Component, effect, Input} from '@angular/core';
import {NgIf} from '@angular/common';
import {Product} from '../../../models/products';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-p-details',
  imports: [
    NgIf
  ],
  templateUrl: './p-details.component.html',
  styleUrl: './p-details.component.scss'
})
export class PDetailsComponent {
  @Input() product!: Product;
  cartItem?: Product;
  cartItems: Product[] = [];

  constructor(
    private cartService: CartService,
  ){
    effect(() => {
      this.cartItems = this.cartService.getCart();
      this.checkCartItem();
    });
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
    this.checkCartItem();
  }
  // Add to cart
  addToCart(product: Product){
    if(this.cartItem){
    console.log(product);
     this.cartService.removeFromCart(product?.id);
     this.checkCartItem();
   }else{
    this.cartService.addToCart(product);
    this.checkCartItem();
    }
  }


  // check cart items
  checkCartItem(){
    this.cartItem = this.cartItems.find(f=>f?.id === this.product?.id);
  }
}
