import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error404/error404.component';
import { CartshopComponent } from './cartshop/cartshop.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'prod',
    component: ProductComponent,
  },

  {
    path: 'products-page',
    component: ProductsPageComponent,
  },

  {
    path: 'products-page/:Name',
    component: ProductsDetailsComponent,
  },

  {
    path: 'contact',
    component: ContactComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'cartshop',
    component: CartshopComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: '**',
    component: Error404Component,
  },


];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
