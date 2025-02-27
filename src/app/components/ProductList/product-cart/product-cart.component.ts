import {Component, computed, Input, OnInit, signal} from '@angular/core';
import {Product} from '../../../models/products';
import {NgIf} from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-cart',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss'
})
export class ProductCartComponent {
@Input() product!: Product;

// ✅ Convert `product.isFavorite` to a Signal (optional)
  isFavorite = signal<boolean>(false);

  // ✅ Computed signal to toggle favorite status dynamically
  favoriteText = computed(() => this.isFavorite() ? '💖 Favorited' : '🤍 Favorite');

  toggleFavorite = () => {
    this.isFavorite.set(!this.isFavorite());
  }

  ngOnInit(){
    console.log("inputData", this.product);
  }
   
}
