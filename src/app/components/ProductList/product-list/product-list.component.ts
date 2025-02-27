import {Component, inject, OnInit, signal} from '@angular/core';
import {Product} from '../../../models/products';
import {ProductCartComponent} from '../product-cart/product-cart.component';
import { ProductsService } from '../../../services/common/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [
    ProductCartComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

// Inject



export class ProductListComponent implements OnInit {
  public readonly productService = inject(ProductsService);

  products1:any;
  isLoading : boolean = false;
 /*
  products = signal<Product[]>([
     {
       "id": 1,
       "name": "Laptop",
       "description": "Powerful laptop with high-performance specs sadfsad sdfhasjd fsdv sadf .",
       "price": 1000,
       "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
       "isFavorite": false
     },
     {
       "id": 2,
       "name": "Phone",
       "description": "Latest smartphone with advanced features. hgdshf nhsdbfsf sdfbjsd fsdavfs fdsh dsf fsd",
       "price": 500,
       "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
       "isFavorite": true
     },
     {
       "id": 3,
       "name": "Headphones",
       "description": "Noise-canceling over-ear headphones. dsvfs f sdsdnfjsad vfsdvg  sdfsdavf sdatff f",
       "price": 200,
       "image": "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
       "isFavorite": false
     },
     {
       "id": 4,
       "name": "Smartwatch",
       "description": "Feature-packed smartwatch for health tracking. sdhfisa gvsdfvsdl sdf at sdfsdf sdf",
       "price": 250,
       "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
       "isFavorite": true
     },
     {
       "id": 5,
       "name": "Gaming Mouse",
       "description": "High-precision gaming mouse with RGB lighting.",
       "price": 150,
       "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
       "isFavorite": false
     }
   ]
 );

 */
 // Subscriptions

 private subscriptions: Subscription[] = [];



 ngOnInit() {
   this.getAllProducts();    
 }

 private getAllProducts (){ 
  const subscription = this.productService.getProducts().subscribe({
    next: res=>{
      this.products1 = res;
      this.isLoading = false;
    },
    error: err=>{
      console.log(err);
      this.isLoading = false;
    }
  }); 
  this.subscriptions.push(subscription) 
 }
}
