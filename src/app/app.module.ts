import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CartshopComponent } from './cartshop/cartshop.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';
import { ProductMenuComponent } from './product-menu/product-menu.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductsPageComponent,
    ProductsDetailsComponent,
    TopnavbarComponent,
    SidebarComponent,
    CartshopComponent,
    ContactComponent,
    Error404Component,
    ProductMenuComponent,
    ProductComponent,
    FooterComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
