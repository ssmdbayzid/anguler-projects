import {Component, effect, Input} from '@angular/core';
import {Product} from '../../../models/products';
import {CartService} from '../../../services/cart.service';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-product-details',

  imports: [NgIf],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
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

  ngOnInit():void{
    this.checkCartItem();
  }



  addToCart(product: Product){
   if(this.cartItem){
     this.cartService.removeFromCart(product?.id)
     this.checkCartItem()
     console.log(this.cartItem);
     this.cartItems = this.cartService.getCart();
   }else{
     this.cartService.addToCart(product)
     this.checkCartItem()
     this.cartItems = this.cartService.getCart();
   }
  }

  checkCartItem(){
    this.cartItem = this.cartItems.find((f: Product)=>f?.id=== this.product?.id)
  }
}
