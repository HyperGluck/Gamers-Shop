import { Component, OnInit, Input } from '@angular/core';
import { ApiService,Products ,Cart} from 'Backend/api.service'


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  products: any[];
  @Input() selectedCategory: string
  
 


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.refreshProducts();
  }

  refreshProducts(){

    this.apiService.getProducts().subscribe((data) =>{
      console.log(data);
      this.products=data;
    });

  }

  AddToCart(obj) {
    
    this.apiService.addProduct(obj).subscribe((data)=>{
      
      console.log(data);
     // this.refreshProducts();
    });
  }

}
