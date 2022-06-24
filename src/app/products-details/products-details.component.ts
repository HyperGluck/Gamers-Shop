import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'Backend/api.service'

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  productNAME: any;
  prod: any[];
  currentProducts: any;

  constructor(private apiService: ApiService ,private actRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.productNAME = this.actRoute.snapshot.params['Name'];
     this.apiService.getProducts().subscribe((data) =>{
       console.log(data);
       this.prod=data;
    });

    this.searchProducts();
  }
  searchProducts() {
    console.log(this.productNAME);
    console.log("im in the fun before the loop");
    console.log("this.prod== "+this.prod);
   
    for (let i of this.prod) {
      console.log("im in the fun after the loop NOT IN IF");

      if (i.Name == this.productNAME) {
        this.currentProducts = i;
      }

    }

  }

}
