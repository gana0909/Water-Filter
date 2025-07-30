import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceComponent } from '../product-service/product-service.component';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})

export class ProductdetailsComponent implements OnInit {
  productId: any;
  product: any;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceComponent
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getAllProducts().find(p => p.id === id);
  }
}




