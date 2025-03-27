import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  Products: any = []

  constructor(private prodService: ProductService, private router: Router) { }

  ngOnInit() {
    this.prodService.getProducts().subscribe((Data)=>{
      console.log(Data)
      this.Products = Data
    })
  }
  
  addToCart() {
    Swal.fire({
      icon: 'warning',
      title: 'You need to log in first',
      text: 'you need to log in to add the product to cart',
      confirmButtonText: 'Log In',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/login'])
        this.scrollToTop();
      }
    })
  }

  scrollToTop(){
    let currentScroll = document.documentElement.scrollTop

    if(currentScroll > 0){
      window.requestAnimationFrame(this.scrollToTop.bind(this))
      window.scrollTo(0, currentScroll - currentScroll / 15)
    }
  }
}
