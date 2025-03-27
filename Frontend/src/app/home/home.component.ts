import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  Products = []

  // constructor(private prodService: productService) { }

  // ngOnInit() {
  //   this.prodService.getProducts().subscribe((Data)=>{
  //     console.log(Data)
  //     this.Products = Data
  //   })
  // }
}
