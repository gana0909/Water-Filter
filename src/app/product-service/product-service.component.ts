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
      shortDesc: 'RO + UV + UF + TDS Adjuster',
      price: 5700,
      image: 'assets/products/p3.jpg',
      showOnHome: false,
      commercialFilter: false,
      originalPrice: 14250,
      discountAmount: 8550,
      discountText: '40% OFF',
      capacity: '12 Liters',
      warranty: '1 year warranty ( Not included electric part )',
      feature: 'Smart Indicator, Automatic Shut-off',
      installation: 'Free'
    },
    {
      id: 2,
      name: 'Sunrise AQUA White',
      shortDesc: 'RO + UV + UF + TDS Adjuster',
      price: 5700,
      image: 'assets/products/p4.jpg',
      showOnHome: false,
      commercialFilter: false,
      originalPrice: 14250,
      discountAmount: 8550,
      discountText: '40% OFF',
      capacity: '12 Liters',
      warranty: '1 year warranty ( Not included electric part )',
      feature: 'Smart Indicator, Automatic Shut-off',
      installation: 'Free'
    },
    {
      id: 3,
      name: 'Royal Plus Star Series',
      shortDesc: 'RO + UV + UF + TDS Adjuster',
      price: 5300,
      image: 'assets/products/p5.jpg',
      showOnHome: false,
      commercialFilter: false,
      originalPrice: 11300,
      discountAmount: 6000,
      discountText: '47% OFF',
      capacity: '14 Liters',
      warranty: '1 year warranty ( Not included electric part )',
      feature: ' Automatic Shut-off',
      installation: 'Free'
    },
    {
      id: 4,
      name: 'Curvv White RO System',
      shortDesc: 'RO + UV + UF + TDS Adjuster',
      price: 6200,
      image: 'assets/products/p8.jpg',
      showOnHome: false,
      commercialFilter: false,
      originalPrice: 12999,
      discountAmount: 6799,
      discountText: '48% OFF',
      capacity: '13 Liters',
      warranty: '1 year warranty ( Not included electric part )',
      feature: 'Smart LED Light,High Filter Life, Automatic Shut-off',
      installation: 'Free'
    },
    {
      id: 5,
      name: 'Curvv Black RO System',
      shortDesc: 'RO + UV + UF + TDS Adjuster',
      price: 6200,
      image: 'assets/products/p1.jpg',
      showOnHome: true,
      commercialFilter: false,
      originalPrice: 12999,
      discountAmount: 6799,
      discountText: '48% OFF',
      capacity: '13 Liters',
      warranty: '1 year warranty ( Not included electric part )',
      feature: 'Smart LED Light,High Filter Life, Automatic Shut-off',
      installation: 'Free'
    },
    {
      id: 6,
      name: 'AiQUA Organic Series',
      shortDesc: 'RO + UV + UF + TDS Adjuster',
      price: 5500,
      image: 'assets/products/p6.jpg',
      showOnHome: true,
      commercialFilter: false,
      originalPrice: 13750,
      discountAmount: 8250,
      discountText: '35% OFF',
      capacity: '12 Liters',
      warranty: '1 year warranty ( Not included electric part )',
      feature: 'Smart Indicator, Automatic Shut-off',
      installation: 'Free'
    },
    {
      id: 7,
      name: 'PHOENIX & AXEONE Black',
      shortDesc: 'RO + UV + UF + TDS Adjuster',
      price: 7000,
      image: 'assets/products/p10.jpg',
      showOnHome: true,
      commercialFilter: false,
      originalPrice: 14000,
      discountAmount: 7000,
      discountText: '50% OFF',
      capacity: '10 Liters',
      warranty: '1 year warranty ( Not included electric part )',
      feature: 'Automatic Shut-off',
      installation: 'Free'
    },
    {
      id: 8,
      name: 'Curvv White RO System',
      shortDesc: 'RO + UV + UF + TDS Adjuster',
      price: 6500,
      image: 'assets/products/p9.jpg',
      showOnHome: true,
      commercialFilter: false,
      originalPrice: 18500,
      discountAmount: 12000,
      discountText: '35% OFF',
      capacity: '12 Liters',
      warranty: '1 year warranty ( Not included electric part )',
      feature: 'Smart Indicator',
      installation: 'Free'
    },
    {
      id: 9,
      name: 'Sunrise AQUA Black',
      shortDesc: 'RO + UV + UF + TDS Adjuster',
      price: 5700,
      image: 'assets/products/p2.jpg',
      showOnHome: true,
      commercialFilter: false,
      originalPrice: 14250,
      discountAmount: 8550,
      discountText: '40% OFF',
      capacity: '12 Liters',
      warranty: '1 year warranty ( Not included electric part )',
      feature: 'Smart Indicator',
      installation: 'Free'
    },
    {
      id: 10,
      name: 'Sunexa SU25',
      shortDesc: '25 LPH',
      price: 14000,
      image: 'assets/products/p7.jpg',
      showOnHome: false,
      commercialFilter: true,
      originalPrice: 14000,
      discountAmount: 0,
      discountText: '0% OFF',
      capacity: '-',
      warranty: '1 year warranty ( Not included electric part )',
      feature: 'Suitable for Commercial and domestic',
      installation: 'Free'
    },
    {
      id: 11,
      name: 'Sunexa SU50',
      shortDesc: '50 LPH',
      price: 18000,
      image: 'assets/products/p12.jpg',
      showOnHome: false,
      commercialFilter: true,
      originalPrice: 18000,
      discountAmount: 0,
      discountText: '0% OFF',
      capacity: '-',
      warranty: '1 year warranty ( Not included electric part )',
      feature: 'Suitable for Commercial and domestic',
      installation: 'Free'
    },
    {
      id: 12,
      name: 'Sunexa SU75',
      shortDesc: '75 LPH',
      price: 24000,
      image: 'assets/products/p11.jpg',
      showOnHome: false,
      commercialFilter: true,
      originalPrice: 24000,
      discountAmount: 0,
      discountText: '0% OFF',
      capacity: '-',
      warranty: '1 year warranty ( Not included electric part )',
      feature: 'Suitable for Commercial and domestic',
      installation: 'Free'
    },
    {
      id: 13,
      name: 'Star X Series',
      shortDesc: 'RO + UV + UF + TDS Adjuster',
      price: 5300,
      image: 'assets/products/p13.jpg',
      showOnHome: false,
      commercialFilter: false,
      originalPrice: 11300,
      discountAmount: 6000,
      discountText: '47% OFF',
      capacity: '12 Liters',
      warranty: '1 year warranty ( Not included electric part )',
      feature: 'Automatic Shut-off',
      installation: 'Free'
    },
    {
      id: 14,
      name: 'PHOENIX & AXEONE White',
      shortDesc: 'RO + UV + UF + TDS Adjuster',
      price: 7000,
      image: 'assets/products/p10.jpg',
      showOnHome: true,
      commercialFilter: false,
      originalPrice: 14000,
      discountAmount: 7000,
      discountText: '50% OFF',
      capacity: '10 Liters',
      warranty: '1 year warranty ( Not included electric part )',
      feature: 'Automatic Shut-off',
      installation: 'Free'
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
