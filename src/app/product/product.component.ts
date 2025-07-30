import { Component, OnInit } from '@angular/core';
import { ProductServiceComponent } from '../product-service/product-service.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  allProducts: any[] = [];
  commercialProducts: any[] = [];
  domesticProducts: any[] = [];
  selectedType: 'domestic' | 'commercial' = 'domestic';
  filteredProducts: any[] = [];

  constructor(private productService: ProductServiceComponent) {}

  ngOnInit(): void {
    this.allProducts = this.productService.getAllProducts();

    // Use correct property name
    this.commercialProducts = this.allProducts.filter(p => p.commercialFilter === true);
    this.domesticProducts = this.allProducts.filter(p => !p.commercialFilter);

    // Default filter
    this.filterProducts();
  }

  filterProducts(): void {
    this.filteredProducts = this.selectedType === 'domestic'
      ? this.domesticProducts
      : this.commercialProducts;
  }

  setFilter(type: 'domestic' | 'commercial'): void {
    this.selectedType = type;
    this.filterProducts();
  }
}
