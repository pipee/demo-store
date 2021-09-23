import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../../../core/services/products/product.service'; 
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.productsService.getProduct(id).subscribe(res => {
      //   this.product = res;
      // });
    });
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id)
    .subscribe(res => {
      this.product = res;
    });
  }
}
