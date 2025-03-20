import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgChartsModule } from 'ng2-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListAdminComponent } from './products-list-admin/products-list-admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { OurPhonesComponent } from './our-phones/our-phones.component';
import { OurLaptopsComponent } from './our-laptops/our-laptops.component';
import { OurTelevisionsComponent } from './our-televisions/our-televisions.component';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { PaiementComponent } from './paiement/paiement.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    NotFoundComponent,
    ProductsListAdminComponent,
    AddProductComponent,
    UpdateProductComponent,
    ProductDetailsComponent,
    UserInterfaceComponent,
    OurPhonesComponent,
    OurLaptopsComponent,
    OurTelevisionsComponent,
    AdminInterfaceComponent,
    PaiementComponent,
    WelcomeComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
