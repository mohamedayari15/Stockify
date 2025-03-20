import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  productForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    Price: new FormControl('', [Validators.required, Validators.min(1)]),
    Description: new FormControl(''),
    Category: new FormControl('', Validators.required),
    Quantity: new FormControl('', Validators.required),
  })

  selectedFile : File | null = null;

  constructor(private prodService: ProductService, private router: Router) { }

  onFileSelected(event: any){
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0]
    }
  }
  
  addProduct() {
    if(this.productForm.valid && this.selectedFile){
      const fd = new FormData();
      fd.append('Name', this.productForm.value.Name!);
      fd.append('Price', this.productForm.value.Price!);
      fd.append('Description', this.productForm.value.Description!);
      fd.append('Category', this.productForm.value.Category!);
      fd.append('Quantity', this.productForm.value.Quantity!);
      fd.append('Image', this.selectedFile!);

      this.prodService.addProduct(fd).subscribe({
        next: (res)=>{
          console.log("Product added successfully", res)
          this.productForm.reset()
          swal.fire({
            icon: 'success',
            title: 'success',
            text: 'Product added successfully'
          })
          setTimeout(() => {
            this.router.navigate(['admin-interface/products-list-admin'])
          }, 1500);
        },
        error: (err)=>{
          console.log("Error adding product", err)
          swal.fire({
            icon: 'error',
            title: 'error',
            text: 'Error adding successfully'
          })
        }
      })
    }
    else {
      console.log("Form is invalid or no image selected")
    }
  }

  goToProductsList(){
    this.router.navigate(['admin-interface/products-list-admin'])
  }

};
