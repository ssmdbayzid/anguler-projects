import {Component, inject, OnInit} from '@angular/core';
import {ProductsService} from '../../services/common/products.service';
import {Product} from '../../models/products';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  products?: Product[] = [];
  searchQuery: string | null = null;

  private subscription : Subscription[] = [];


  // Inject
  private readonly productService = inject(ProductsService);
  private readonly activeRoute = inject(ActivatedRoute);

  ngOnInit() {

    const subscription = this.activeRoute.queryParams.subscribe(qParams=>{
      this.searchQueryFromQueryParams(qParams);
      this.getAllProducts();
    })
  }

  private getAllProducts(){

  }

  private searchQueryFromQueryParams(qParam:any) {
    if(qParam && qParam['searchQuery']){
      this.searchQuery = qParam['searchQuery'];
    }else {
      this.searchQuery = null;
    }
  }
}
