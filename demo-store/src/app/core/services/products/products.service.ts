import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product.model'; 

import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    console.log(`${environment.ulr_api}/products`);
    return this.http.get<Product []>(`${environment.ulr_api}/products`);
  }

  getProduct(id: string){
    return this.http.get<Product>(`${environment.ulr_api}/products/${id}`);
  }

  createProduct(product: Product){
    return this.http.post(`${environment.ulr_api}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>){
    return this.http.put(`${environment.ulr_api}/products/${id}`, changes);
  }

  deleteProduct(id: string){
    return this.http.delete(`${environment.ulr_api}/products/${id}`);
  }
}
