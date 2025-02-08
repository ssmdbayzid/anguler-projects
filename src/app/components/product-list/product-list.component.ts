import { Component } from '@angular/core';
import {Product} from '../../models/products';
import {CartService} from '../../services/cart.service';
import { NgFor} from '@angular/common';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {PDetailsComponent} from './p-details/p-details.component';


@Component({
  selector: 'app-product-list',
  imports: [
    NgFor,
    ProductDetailsComponent,
    PDetailsComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

export class ProductListComponent {
 products: Product[] = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Headphones', price: 200 }
]

  constructor(private cartService: CartService) {}

  addToCart(product: Product){
  this.cartService.addToCart(product)
  }
}
