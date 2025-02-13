import {Component} from '@angular/core';
import {ProductListComponent} from '../../components/ProductList/product-list/product-list.component';

@Component({
  selector: 'app-home',
  imports: [
    ProductListComponent

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
