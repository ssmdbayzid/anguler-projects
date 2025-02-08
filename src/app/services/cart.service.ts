import { Injectable } from '@angular/core';
import {Product} from "../models/products";

@Injectable({providedIn: 'root'})


export class CartService {
  private cart: Product[] = [];

  constructor (){
    this.loadCart()
  }

  private isLocalStorageAvailable() {
    return typeof window !== 'undefined' && window.localStorage;
  }

  private saveCart(){
    if(this.isLocalStorageAvailable()){
    localStorage.setItem("cart", JSON.stringify(this.cart));
    }
  }

  private loadCart(){
    if(this.isLocalStorageAvailable()){
      const storedCart = localStorage.getItem("cart");
      if(storedCart){
        this.cart = JSON.parse(storedCart);
      }
    }
  }

  // Add to cart
  addToCart(product: Product){
    this.cart.push(product);
    this.saveCart();
  }

  // Remove From Cart
  removeFromCart(i:number){
    console.log(i)
    const findIndex = this.cart.findIndex((item:any) => item.id === i);
    this.cart.splice(findIndex, 1);
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.saveCart();
  }

  // Get Cart
  getCart(){
    return this.cart;
  }

}
