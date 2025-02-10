import {inject, Injectable, PLATFORM_ID, signal, WritableSignal} from '@angular/core';
import {Product} from "../models/products";
import {isPlatformBrowser} from '@angular/common';

@Injectable({providedIn: 'root'})


export class CartService {

  private cart: WritableSignal<Product[]> = signal([]);

  private platformId = inject(PLATFORM_ID);

  constructor() {
    this.loadCart()
  }



  private isLocalStorageAvailable() {
    return isPlatformBrowser(this.platformId) && typeof window !== 'undefined' && window.localStorage;
  }

  private loadCart() {
    if (this.isLocalStorageAvailable()) {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        this.cart.set(JSON.parse(storedCart));
      }
    }
  }

  private saveCart() {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem("cart", JSON.stringify(this.cart()));
    }
  }

  // Add to cart
  addToCart(product: Product) {
    const currentItems = this.cart();
    this.cart.set([...currentItems, product]);
    this.saveCart();
  }

  // Remove From Cart
  removeFromCart(i: number) {
    const currentCart = this.cart();
    const updatedCart = currentCart.filter((item: any) => item.id !== i);
    this.cart.set(updatedCart)
    this.saveCart();
  }

  resetCart(){
    this.cart.set([]);
    this.saveCart();
  }

  // Get Cart
  getCart() {
    return this.cart();
  }
}


