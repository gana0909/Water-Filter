import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
//export class ProductComponent {

//}



export class ProductComponent implements OnInit {
  productId: any;
  product: any;

  productList = [
    {
      id: 1,
      name: 'PureDrop UV+RO 15L',
      description: 'Advanced RO + UV system for clean water with TDS controller.',
      capacity: 15,
      type: 'RO + UV',
      power: 40,
      warranty: '1 Year',
      image: 'assets/products/p1.jpg'
    },
    {
      id: 2,
      name: 'AquaFresh Xpert 12L',
      description: 'Removes bacteria and viruses, ensures safe drinking water.',
      capacity: 12,
      type: 'RO + UF',
      power: 35,
      warranty: '1 Year',
      image: 'assets/products/p2.jpg'
    },
    {
      id: 3,
      name: 'Kent Maxx 10L',
      description: 'Wall mountable UV+UF purifier with transparent design.',
      capacity: 10,
      type: 'UV + UF',
      power: 30,
      warranty: '1 Year',
      image: 'assets/products/p3.jpg'
    },
    {
      id: 4,
      name: 'Livpure Glitz 7L',
      description: 'Compact purifier with smart indicators and advanced filter.',
      capacity: 7,
      type: 'RO',
      power: 28,
      warranty: '1 Year',
      image: 'assets/products/p4.jpg'
    },
    {
      id: 5,
      name: 'BlueStar Stella 8.2L',
      description: 'Only purifier with hot and cold water option.',
      capacity: 8.2,
      type: 'RO + UV + UF',
      power: 45,
      warranty: '2 Years',
      image: 'assets/products/p5.jpg'
    },
    {
      id: 6,
      name: 'HUL Pureit Copper+ 10L',
      description: 'Infuses copper in water automatically, healthy choice.',
      capacity: 10,
      type: 'RO + UV + Copper',
      power: 42,
      warranty: '1 Year',
      image: 'assets/products/p6.jpg'
    },
    {
      id: 7,
      name: 'Eureka Forbes AquaSure 6L',
      description: 'Energy saving model with smart alerts.',
      capacity: 6,
      type: 'RO',
      power: 25,
      warranty: '1 Year',
      image: 'assets/products/p7.jpg'
    },
    {
      id: 8,
      name: 'Tata Swach Nova 7L',
      description: 'Gravity based filter with chemical-free process.',
      capacity: 7,
      type: 'Gravity-based',
      power: 0,
      warranty: '6 Months',
      image: 'assets/products/p8.jpg'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.product = this.productList.find(p => p.id == this.productId);
  }
}
