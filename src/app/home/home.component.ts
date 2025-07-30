import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceComponent } from '../product-service/product-service.component';


declare var bootstrap: any; // required for manual bootstrap carousel init

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  topProducts: any[] = [];
  commerialproduct: any[] = [];
  commercialProducts: any[] = [];

  constructor(private productService: ProductServiceComponent) {}

  ngOnInit(): void {
    this.topProducts = this.productService.getBestSellingProducts();
    this.commercialProducts = this.productService.getCommercialProducts();
  }
  
}
