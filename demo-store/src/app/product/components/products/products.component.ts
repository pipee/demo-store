import { Component, OnInit } from '@angular/core';

import { Product } from './../../../core/models/product.model';
import { ProductService } from './../../../core/services/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  clickProduct(id: number){
    console.log('product');
    console.log(id);
  }

  fetchProducts(){
    this.productService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

}
