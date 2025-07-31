import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-product-service',
  templateUrl: './product-service.component.html',
  styleUrls: ['./product-service.component.css']
})

@Injectable({
  providedIn: 'root'
}) 

export class ProductServiceComponent {

  private products = [
    {
      id: 1,
      name: 'Sunrise AQUA Grey',
      shortDesc: 'Double purification technology',
      price: 5700,
      image: 'assets/products/p3.jpg',
      showOnHome: false,
      commercialFilter: false
    },
    {
      id: 2,
      name: 'Sunrise AQUA White',
      shortDesc: 'Double purification technology',
      price: 5700,
      image: 'assets/products/p4.jpg',
      showOnHome: false,
      commercialFilter: false
    },
    {
      id: 3,
      name: 'Royal Plus Star Series',
      shortDesc: 'Hot & cold water purifier',
      price: 5500,
      image: 'assets/products/p5.jpg',
      showOnHome: false,
      commercialFilter: false
    },
    {
      id: 4,
      name: 'Curvv White RO System',
      shortDesc: 'Advanced RO + UV system',
      price: 6800,
      image: 'assets/products/p8.jpg',
      showOnHome: false,
      commercialFilter: false
    },
    {
      id: 5,
      name: 'Curvv Black RO System',
      shortDesc: 'Advanced RO + UV system',
      price: 6800,
      image: 'assets/products/p1.jpg',
      showOnHome: true,
      commercialFilter: false
    },
    {
      id: 6,
      name: 'AiQUA Organic Series',
      shortDesc: 'Hot & cold water purifier',
      price: 5500,
      image: 'assets/products/p6.jpg',
      showOnHome: true,
      commercialFilter: false
    },
    {
      id: 7,
      name: 'PHOENIX & AXEONE',
      shortDesc: 'Hot & cold water purifier',
      price: 7000,
      image: 'assets/products/p10.jpg',
      showOnHome: true,
      commercialFilter: false
    },
    {
      id: 8,
      name: 'Curvv White RO System',
      shortDesc: 'Advanced RO + UV system',
      price: 6800,
      image: 'assets/products/p9.jpg',
      showOnHome: true,
      commercialFilter: false
    },
    {
      id: 9,
      name: 'Sunrise AQUA Black',
      shortDesc: 'Double purification technology',
      price: 5700,
      image: 'assets/products/p2.jpg',
      showOnHome: true,
      commercialFilter: false
    },
    {
      id: 10,
      name: 'Sunexa SU25',
      shortDesc: '25 LPH',
      price: 14000,
      image: 'assets/products/p7.jpg',
      showOnHome: false,
      commercialFilter: true
    },
    {
      id: 11,
      name: 'Sunexa SU50',
      shortDesc: '50 LPH',
      price: 18000,
      image: 'assets/products/p12.jpg',
      showOnHome: false,
      commercialFilter: true
    },
    {
      id: 12,
      name: 'Sunexa SU75',
      shortDesc: '75 LPH',
      price: 24000,
      image: 'assets/products/p11.jpg',
      showOnHome: false,
      commercialFilter: true
    }
  ];


  getAllProducts() {
    return this.products;
  }

  getBestSellingProducts(limit = 5) {
    return this.products.filter(p => p.showOnHome).slice(0, 5);
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }

  

  getCommercialProducts(limit: number = 3) {
  return this.products
    .filter(product => product.commercialFilter === true)
    .slice(0, limit);
  }


  
}



export class ProductService {
  private products = [
    { id: 1, name: 'Likud Pure', price: 12000, description: '15L UV+RO', isBestSeller: true },
    { id: 2, name: 'Likud Max', price: 15000, description: '20L RO+UF+TDS', isBestSeller: false },
    { id: 3, name: 'Likud Ultra', price: 18000, description: '25L UV+RO+UF', isBestSeller: true },
    { id: 4, name: 'Likud Pro', price: 20000, description: '30L with mineral booster', isBestSeller: true },
    { id: 5, name: 'Likud Eco', price: 11000, description: '12L basic RO', isBestSeller: false },
    { id: 6, name: 'Likud Elite', price: 21000, description: 'Smart purifier with app', isBestSeller: true },
    { id: 7, name: 'Likud Mini', price: 9000, description: 'Compact model', isBestSeller: false }
  ];

  
}
