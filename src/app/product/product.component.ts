import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductMenuComponent } from '../product-menu/product-menu.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @ViewChild(ProductMenuComponent) productMenu: ProductMenuComponent

  constructor() { }

  ngOnInit(): void {
  }

}
