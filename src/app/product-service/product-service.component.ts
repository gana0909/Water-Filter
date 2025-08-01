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
      commercialFilter: false,
      originalPrice: 20000,
      discountAmount: 13700,
      discountText: '10% OFF'
    },
    {
      id: 2,
      name: 'Sunrise AQUA White',
      shortDesc: 'Double purification technology',
      price: 5700,
      image: 'assets/products/p4.jpg',
      showOnHome: false,
      commercialFilter: false,
      originalPrice: 20000,
      discountAmount: 13700,
      discountText: '15% OFF'
    },
    {
      id: 3,
      name: 'Royal Plus Star Series',
      shortDesc: 'Hot & cold water purifier',
      price: 5500,
      image: 'assets/products/p5.jpg',
      showOnHome: false,
      commercialFilter: false,
      originalPrice: 20000,
      discountAmount: 13700,
      discountText: '20% OFF'
    },
    {
      id: 4,
      name: 'Curvv White RO System',
      shortDesc: 'Advanced RO + UV system',
      price: 6800,
      image: 'assets/products/p8.jpg',
      showOnHome: false,
      commercialFilter: false,
      originalPrice: 20000,
      discountAmount: 13200,
      discountText: '25% OFF'
    },
    {
      id: 5,
      name: 'Curvv Black RO System',
      shortDesc: 'Advanced RO + UV system',
      price: 6200,
      image: 'assets/products/p1.jpg',
      showOnHome: true,
      commercialFilter: false,
      originalPrice: 12999,
      discountAmount: 6799,
      discountText: '48% OFF'
    },
    {
      id: 6,
      name: 'AiQUA Organic Series',
      shortDesc: 'Hot & cold water purifier',
      price: 5500,
      image: 'assets/products/p6.jpg',
      showOnHome: true,
      commercialFilter: false,
      originalPrice: 13750,
      discountAmount: 8250,
      discountText: '35% OFF'
    },
    {
      id: 7,
      name: 'PHOENIX & AXEONE',
      shortDesc: 'Hot & cold water purifier',
      price: 7000,
      image: 'assets/products/p10.jpg',
      showOnHome: true,
      commercialFilter: false,
      originalPrice: 14000,
      discountAmount: 7000,
      discountText: '50% OFF'
    },
    {
      id: 8,
      name: 'Curvv White RO System',
      shortDesc: 'Advanced RO + UV system',
      price: 6500,
      image: 'assets/products/p9.jpg',
      showOnHome: true,
      commercialFilter: false,
      originalPrice: 18500,
      discountAmount: 12000,
      discountText: '35% OFF'
    },
    {
      id: 9,
      name: 'Sunrise AQUA Black',
      shortDesc: 'Double purification technology',
      price: 5700,
      image: 'assets/products/p2.jpg',
      showOnHome: true,
      commercialFilter: false,
      originalPrice: 14250,
      discountAmount: 8550,
      discountText: '40% OFF'
    },
    {
      id: 10,
      name: 'Sunexa SU25',
      shortDesc: '25 LPH',
      price: 14000,
      image: 'assets/products/p7.jpg',
      showOnHome: false,
      commercialFilter: true,
      originalPrice: 20000,
      discountAmount: 13700,
      discountText: '55% OFF'
    },
    {
      id: 11,
      name: 'Sunexa SU50',
      shortDesc: '50 LPH',
      price: 18000,
      image: 'assets/products/p12.jpg',
      showOnHome: false,
      commercialFilter: true,
      originalPrice: 20000,
      discountAmount: 13700,
      discountText: '60% OFF'
    },
    {
      id: 12,
      name: 'Sunexa SU75',
      shortDesc: '75 LPH',
      price: 24000,
      image: 'assets/products/p11.jpg',
      showOnHome: false,
      commercialFilter: true,
      originalPrice: 20000,
      discountAmount: 13700,
      discountText: '46% OFF'
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
