import { Component, OnInit } from '@angular/core';
import { ApiService } from 'Backend/api.service'


@Component({
  selector: 'app-cartshop',
  templateUrl: './cartshop.component.html',
  styleUrls: ['./cartshop.component.css']
})
export class CartshopComponent implements OnInit {
  Cart : any[];
  Sum = 0
  counter = 0

  share=localStorage.getItem("shareUser");
 
  
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.refreshCart();
  }

  refreshCart(){
    this.apiService.getCart().subscribe((data) =>{
      console.log(data);
      this.Cart=data;
      this.totalSum();
    });
}

removeProduct(obj) {
  this.apiService.removeProduct(obj).subscribe((data)=>{
    this.refreshCart();
  });

  
 }

totalSum() {
  this.Sum=0;
  this.counter=0;
  for (let c of this.Cart) {
    if(c.mail==this.share){
      this.Sum += c.Price;
      this.counter++;    
  }
}
}


}