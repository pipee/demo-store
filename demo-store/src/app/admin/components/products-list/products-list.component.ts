import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(
    private productsService: ProductsService
  ) { 

  }

  products = [];
  displayedColumns: string[] = ['id', 'title', 'precio', 'actions'];

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(res => {
      this.products = res;
    });
  }

  deleteProduct(id: string){
    this.productsService.deleteProduct(id)
    .subscribe(res => {
      if(res){
        const index = this.products.findIndex(product => product.id === id);
        this.products.splice(index, 1);
        this.products = [...this.products];
      }
    });
  }
}
