import {Component, computed, Input, signal} from '@angular/core';
import {Product} from '../../../models/products';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-product-cart',
  imports: [
    NgIf
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
}
