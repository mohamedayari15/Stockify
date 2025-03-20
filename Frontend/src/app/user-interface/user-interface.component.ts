import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {

  cartCount: number = 0;
  Products: any[] = [];
  isDropDownOpen: boolean = false;

  constructor(private router: Router, private authService: AuthService, private panierService: PanierService) { }

  ngOnInit() {
    this.panierService.getCartCount().subscribe(count => {
      this.cartCount = count;
    });
    this.updateCartCount();
  }

  updateCartCount() {
    this.Products = this.panierService.getProducts();
  }

  calculateTotal(): number {
    return this.panierService.calculateTotal();
  }

  toggleCartDropdown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  removeFromCart(product: any) {
    this.panierService.removeProduct(product);
    this.updateCartCount();
  }

  payer() {
    this.isDropDownOpen = false
  }

}
