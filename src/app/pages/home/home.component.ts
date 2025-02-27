import {Component} from '@angular/core';
import {ProductListComponent} from '../../components/ProductList/product-list/product-list.component';
import {ShowCaseComponent} from '../../shared/show-case/show-case/show-case.component';

@Component({
  selector: 'app-home',
  imports: [
    ProductListComponent,
    ShowCaseComponent,
    // ShowCaseComponent

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
