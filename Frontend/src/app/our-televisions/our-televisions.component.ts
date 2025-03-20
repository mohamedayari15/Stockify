import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-televisions',
  templateUrl: './our-televisions.component.html',
  styleUrls: ['./our-televisions.component.css']
})
export class OurTelevisionsComponent {

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
};
