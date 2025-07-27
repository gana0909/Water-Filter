import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

declare var bootstrap: any; // required for manual bootstrap carousel init

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  constructor(private router: Router) {}

  products = [
    {
      id: 1,
      name: 'Curvv Black RO System',
      shortDesc: 'Advanced RO + UV system',
      price: 6800,
      image: 'assets/products/p1.jpg'
    },
    {
      id: 2,
      name: 'AiQUA Organic Series',
      shortDesc: 'Hot & cold water purifier',
      price: 5500,
      image: 'assets/products/p6.jpg'
    },
    {
      id: 3,
      name: 'PHOENIX & AXEONE',
      shortDesc: 'Hot & cold water purifier',
      price: 7000,
      image: 'assets/products/p10.jpg'
    },
    {
      id: 4,
      name: 'Curvv White RO System',
      shortDesc: 'Advanced RO + UV system',
      price: 6800,
      image: 'assets/products/p9.jpg'
    },
    {
      id: 5,
      name: 'Sunrise AQUA Black',
      shortDesc: 'Double purification technology',
      price: 5700,
      image: 'assets/products/p2.jpg'
    }
  ];
  commercaialproducts = [
    {
      id: 1,
      name: 'Sunexa SU25',
      shortDesc: '25 LPH',
      price: 14000,
      image: 'assets/products/p7.jpg'
    },
    {
      id: 2,
      name: 'Sunexa SU50',
      shortDesc: '50 LPH',
      price: 18000,
      image: 'assets/products/p11.jpg'
    },
    {
      id: 3,
      name: 'Sunexa SU75',
      shortDesc: '75 LPH',
      price: 24000,
      image: 'assets/products/p12.jpg'
    }
  ];



  ngAfterViewInit(): void {
    const myCarouselEl = document.querySelector('#mainCarousel');
    if (myCarouselEl) {
      new bootstrap.Carousel(myCarouselEl, {
        interval: 3000,
        ride: 'carousel'
      });
    }
  }
}
