import {Component, inject, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../services/common/products.service';
import {Product} from '../../models/products';
import {SpinnerComponent} from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-product-details',
  imports: [
    SpinnerComponent
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
id?: string | null;
product?: any;
isLoading: boolean = false;

// Subscriptions
private subscriptions: Subscription[] = [];

  private activeRoute = inject(ActivatedRoute);
  private productService = inject(ProductsService);



ngOnInit() {
  const subscription = this.activeRoute.paramMap.subscribe(params=>{
    this.id = params.get('id');
   if(this.id){
     this.getProductById(this.id);
   }
  })

  this.subscriptions.push(subscription);
}

private getProductById(id: string){
this.isLoading = true;
const subscription = this.productService.getProductById(id).subscribe({
  next: res => {
    this.product = res;
    this.isLoading = false;
    console.log('this.isLoading', this.isLoading);

  },
  error: err=>{
    console.log(err);
    this.isLoading = false;
  }
});
 this.subscriptions.push(subscription);
}

  /**
   * ON Destroy
   */
  ngOnDestroy(): void {
    this.subscriptions?.forEach(sub => sub?.unsubscribe());
  }

}
