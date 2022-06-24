import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent implements OnInit {


  selectedCategory: string;
  showProductComponent: boolean = false;

  Category = ["Console", "Games", "Accesserios"];

  showConsole() {
    this.selectedCategory = this.Category[0]
    this.showProductComponent = true;
  }
  showGames() {
    this.selectedCategory = this.Category[1]
    this.showProductComponent = true;
  }
  showAccesserios() {
    this.selectedCategory = this.Category[2]
    this.showProductComponent = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
