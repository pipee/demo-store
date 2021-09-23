import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './../../../core/models/product.model'; 

import { environment } from './../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<Product []>(environment.ulr_api);
  }

  getProduct(id: string){
    return this.http.get<Product>(`${environment.ulr_api}${id}`);
  }

}
