import { Component, OnInit } from '@angular/core';
import { ApiService } from 'Backend/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getProducts().subscribe((data) =>{
      this.products=data;
    });

  }
  
     

}
