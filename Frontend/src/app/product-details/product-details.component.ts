import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  prodData: any = {};
  prodId: any;

  constructor(private prodService: ProductService, private route: ActivatedRoute, private router: Router, private panierService: PanierService) { }

  ngOnInit() {
    this.prodId = this.route.snapshot.paramMap.get('id');
    this.getProductDetails(this.prodId);
  }

  getProductDetails(prodId: any) {
    this.prodService.getProductById(prodId).subscribe({
      next: (res) => {
        console.log("Fetching product data successfully", res);
        this.prodData = res;
      },
      error: (err) => {
        console.log("Error fetching product data", err);
      }
    });
  }

  addToCart(prodData: any) {
    this.panierService.addProduct(prodData);
    this.panierService.updateCartCount(); // Notify components that cart count has changed
    console.log(prodData);
    console.log("Product added to cart");
  }

  backToList() {
    switch (this.prodData.Category) {
      case "Laptop":
        this.router.navigate(['user-interface/our-laptops']);
        break;
      case "Television":
        this.router.navigate(['user-interface/our-televisions']);
        break;
      default:
        this.router.navigate(['user-interface/our-phones']);
        break;
    }
  }
}
