import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-list-admin',
  templateUrl: './products-list-admin.component.html',
  styleUrls: ['./products-list-admin.component.css']
})
export class ProductsListAdminComponent {

  Products: any = []

  constructor(private prodService: ProductService, private router : Router) { }
  
  ngOnInit() {
    this.prodService.getProducts().subscribe(
      res => {
        console.log(res)
        this.Products = res
      } 
    )
  }

  deleteProduct(id: String){
    this.prodService.deleteProduct(id).subscribe({
      next: (res) => {
        Swal.fire({
          title: 'Product deleted successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        console.log("Product deleted successfully", res)
        this.ngOnInit()
      },
      error: (err)=>{
        console.log("Error deleting product", err)
      }
    })
  }

  goToAddProd(){
    this.router.navigate(['/admin-interface/add-product'])
  }

};
