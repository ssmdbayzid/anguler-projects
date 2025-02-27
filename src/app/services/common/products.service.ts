import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  products : any = [];


  // get all products
  getProducts(){
    return this.http.get('https://fakestoreapi.com/products?limit=5');
  }

  // gat product by id

  getProductById(id: string, select?: string){
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }

}
