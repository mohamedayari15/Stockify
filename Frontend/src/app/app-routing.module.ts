import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { OurPhonesComponent } from './our-phones/our-phones.component';
import { OurTelevisionsComponent } from './our-televisions/our-televisions.component';
import { OurLaptopsComponent } from './our-laptops/our-laptops.component';
import { ProductsListAdminComponent } from './products-list-admin/products-list-admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';

import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { PaiementComponent } from './paiement/paiement.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { 
    path: 'user-interface', 
    component: UserInterfaceComponent, 
    canActivate: [UserGuard],
    children: [
      { path: 'welcome', component: WelcomeComponent},
      { path: 'our-laptops', component: OurLaptopsComponent},
      { path: 'our-phones', component: OurPhonesComponent},
      { path: 'our-televisions', component: OurTelevisionsComponent},
      { path: 'product-details/:id', component: ProductDetailsComponent},
      { path: 'paiement', component: PaiementComponent}
    ]
  },
  
  { 
    path: 'admin-interface', 
    component: AdminInterfaceComponent, 
    canActivate: [AdminGuard],
    children: [
      { path: 'products-list-admin', component: ProductsListAdminComponent},
      { path: 'add-product', component: AddProductComponent},
    ]
  },
  { path: 'update-product/:id', component: UpdateProductComponent, canActivate: [AdminGuard]},
  
  { path: '**', component: NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
