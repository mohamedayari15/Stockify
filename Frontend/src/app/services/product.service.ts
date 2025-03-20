import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'http://127.0.0.1:3000/Product'

  constructor(private http: HttpClient) { }

  addProduct(productData: any) {
    return this.http.post(`${this.apiUrl}/post`, productData);
  }

  getProducts() {
    return this.http.get(`${this.apiUrl}/getProducts`);
  }

  getProductById(prodId: String) {
    return this.http.get(`${this.apiUrl}/getProductById/${prodId}`);
  }

  updateProduct(productData: any, id: String) {
    return this.http.put(`${this.apiUrl}/update/${id}`, productData);
  }

  deleteProduct(id: String) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

};
