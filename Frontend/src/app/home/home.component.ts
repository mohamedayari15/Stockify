import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  Products: any = []
  ProdId: any = ''

  constructor(private prodService: ProductService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.prodService.getProducts().subscribe((Data)=>{
      console.log(Data)
      this.Products = Data
    })
  }
  
  addToCart(product: any) {
    if (!product || !product._id) {
      console.error("Erreur: Produit invalide", product);
      return; 
    }
  
    if (this.authService.isLoggedIn()) {
      console.log("✅ Utilisateur connecté, redirection vers:", `user-interface/product-details/${product._id}`);
      this.router.navigate(['user-interface/product-details', product._id]);
    } else {
      const redirectUrl = `user-interface/product-details/${product._id}`;
      console.log("🔄 Stockage de redirectUrl:", redirectUrl);
      localStorage.setItem('redirectUrl', redirectUrl);
      Swal.fire({
        title: 'Veuillez vous connecter',
        text: 'Vous devez être connecté pour ajouter des produits au panier.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Se connecter',
        cancelButtonText: 'Annuler'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("✅ Action confirmée par l'utilisateur.");
          this.router.navigate(['/login']);
        }
        else{
          console.log("❌ Action annulée par l'utilisateur.");
          this.router.navigate(['/home']);
        }
      })
    }
  }
  
  scrollToTop(){
    let currentScroll = document.documentElement.scrollTop

    if(currentScroll > 0){
      window.requestAnimationFrame(this.scrollToTop.bind(this))
      window.scrollTo(0, currentScroll - currentScroll / 15)
    }
  }

}
