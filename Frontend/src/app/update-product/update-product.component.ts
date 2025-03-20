import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {

  productId: any;
  productData: any = {}
  selectedFile : File | null = null

  constructor(private route: ActivatedRoute, private prodService: ProductService, private router: Router) { }

  onFileSelected(event: any){
    if(event.target.files.length > 0){
      this.selectedFile = event.target.files[0]
    }
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.getProductDetails(this.productId)
  }

  getProductDetails(productId: any) {
    this.prodService.getProductById(productId).subscribe((Data) => {
      console.log(Data)
      this.productData = Data;
    })
  }

  updateProduct(productData: any, productId: String){
      const fd = new FormData()
      fd.append('Name', productData.Name),
      fd.append('Price', productData.Price),
      fd.append('Description', productData.Description),
      fd.append('Category', productData.Category),
      fd.append('Quantity', productData.Quantity)

      if(this.selectedFile){
          fd.append('Image', this.selectedFile)
      }
      else{
          fd.append('Image', productData.Image)
      }

      this.prodService.updateProduct(fd, productId).subscribe({
        next: (res)=>{
          console.log("Product updated successfully", res),
          swal.fire({
            icon: 'success',
            title: 'success',
            text: 'Product updated successfully'
          })
          setTimeout(() => {
            this.router.navigate(['admin-interface/products-list-admin'])
          }, 1500);
        },
        error: (err)=>{
          console.log("Eroor updating product", err),
          swal.fire({
            icon: 'success',
            title: 'success',
            text: 'Product updated successfully'
          })
        }
      })
  }

  Cancel() {
    this.router.navigate(['admin-interface/products-list-admin'])
  }

};
