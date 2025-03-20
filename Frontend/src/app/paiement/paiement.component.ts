import { Component } from '@angular/core';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent {

  Products: any = []

  constructor(private panierService : PanierService){}

  ngOnInit(){
    this.Products = this.panierService.getProducts()
    console.log(this.Products)
  }

  calculateTotal(): number {
    return this.panierService.calculateTotal();
  }

  selectPayment(method: string) {
    console.log("Selected Payment Method:", method);
  }

};
