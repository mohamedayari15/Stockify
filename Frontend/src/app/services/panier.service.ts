import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class PanierService {

  private products: any[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);

  constructor() { }

  addProduct(product: any) {
    this.products.push(product);
    this.updateCartCount();
  }

  getProducts() {
    return this.products;
  }

  calculateTotal(): number {
    let total = 0;
    this.products.forEach(product => {
      const price = Number(product.Price); 
      if (!isNaN(price) && price > 0) { 
        total += price;
      }
    });
    return total;
  }

  updateCartCount() {
    this.cartCountSubject.next(this.products.length); // Update the cart count
  }

  getCartCount() {
    return this.cartCountSubject.asObservable(); // Return observable to track cart count
  }

  removeProduct(product: any) {
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
      this.updateCartCount();
    }
  }
}
