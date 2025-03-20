import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-our-phones',
  templateUrl: './our-phones.component.html',
  styleUrls: ['./our-phones.component.css']
})
export class OurPhonesComponent {

  Products: any = [];
  
      constructor(private prodService: ProductService, private router: Router) {}
  
    ngOnInit() {
      this.prodService.getProducts().subscribe((Data)=>{
        console.log(Data)
        this.Products = Data
      })
    }
  
    viewProdDetails(prodId: String) {
      this.router.navigate(['user-interface/product-details', prodId])
    }
}
