import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service'; 
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
    private productsService: ProductsService
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

  createProduct () {
    const newProduct: Product = {
      id: '123',
      title: "camisa",
      image: "assets/images/camiseta.png",
      price: 30000,
      description: "nuevo producto desde angular"
    };
    this.productsService.createProduct(newProduct).subscribe(res => {
      console.log(this.product);
    });
  }

  updateProduct(){
    const updateProduct: Partial<Product> = {
      price: 990000,
      description: "Edit de nuevo producto desde angular"
    };
    this.productsService.updateProduct("123",updateProduct).subscribe(res => {
      console.log(this.product);
    });
  }

  deleteProduct(){
    this.productsService.deleteProduct('123').subscribe(res => {
      console.log(res);
    });
  }
}
