import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
   baseURL: string = 'http://localhost:8000/';
   headers = { 'content-type': 'application/json'};

  constructor(private http: HttpClient) {}

  //requests for collection user
  
  getUsers(): Observable<any> {
    return this.http.get(this.baseURL + 'api/getUsers')
  }

  add2Register(user: User): Observable <any> {
    console.log(user);
    let TempUser= new User(user.name,user.email,user.password,user.pele);
 
    let body =JSON.stringify(TempUser);
    console.log(body)
    return this.http.post(this.baseURL+ 'api/register', body,
    {headers: this.headers}
    
    );

  }



//requstes for collection porducts
  getProducts(): Observable<any> {
    return this.http.get(this.baseURL + 'api/getProducts')

  }





//requstes for collection cart

  
  addProduct(cart: any): Observable <any> {
    console.log(cart);
    let Tempcart= new Cart(cart.SerialNumber,cart.Name,cart.Price,cart.Category,cart.Description,cart.ImgUrl,localStorage.getItem("shareUser"));
 
    let body =JSON.stringify(Tempcart);
    console.log(body)
    return this.http.post(this.baseURL+ 'api/add2Cart', body,
    {headers: this.headers}
    
    );
  }


  removeProduct(cart: Cart) : Observable<any> {
    return this.http.delete(this.baseURL + 'api/deleteProduct/' + cart.SerialNumber);
  }



  getCart(): Observable<any> {
    return this.http.get(this.baseURL + 'api/getCart')

  }




}

export class User {
  name: string;
  email: string;
  password: string;
  pele: string



  constructor(name: string, email: string, password: string,pele: string) {

    this.name = name;
    this.email = email;
    this.password = password;
    this.pele = pele;
  }
}

export class Products {
  SerialNumber: string;
  Name: string;
  Price: number;
  Category: string;
  Description: string;
  ImgUrl: string;

  

  constructor(
    SerialNumber: string,
    Name: string,
    Price: number,
    Category: string,
    Description: string,
    ImgUrl: string
  ) {
    this.SerialNumber = SerialNumber;
    this.Name = Name;
    this.Price = Price;
    this.Category = Category;
    this.Description = Description;
    this.ImgUrl = ImgUrl;
  }
}

export class Cart {
  SerialNumber: string;
  Name: string;
  Price: number;
  Category: string;
  Description: string;
  ImgUrl: string;
  mail:string;

  

  constructor(
    SerialNumber: string,
    Name: string,
    Price: number,
    Category: string,
    Description: string,
    ImgUrl: string,
    mail:string,
  ) 
  {
  
    this.SerialNumber = SerialNumber;
    this.Name = Name;
    this.Price = Price;
    this.Category = Category;
    this.Description = Description;
    this.ImgUrl = ImgUrl;
    this.mail=mail;
    

  }


}


