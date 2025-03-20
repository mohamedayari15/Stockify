import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-laptops',
  templateUrl: './our-laptops.component.html',
  styleUrls: ['./our-laptops.component.css']
})
export class OurLaptopsComponent {

    Products: any = [];
    
    constructor(private prodService: ProductService, private router: Router) {}
    
    ngOnInit() {
      this.prodService.getProducts().subscribe((Data)=>{
        console.log(Data)
        this.Products = Data
        console.log(this.Products)
      })
    }
    
    viewProdDetails(prodId: String) {
      this.router.navigate(['user-interface/product-details', prodId])
    }
}
