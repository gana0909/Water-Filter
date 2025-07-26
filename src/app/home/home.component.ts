import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  products = [
    {
      id: 1,
      name: 'PureDrop UV+RO 15L',
      shortDesc: 'Advanced RO + UV system',
      price: 2000,
      image: 'assets/products/p1.jpg'
    },
    {
      id: 2,
      name: 'AquaFresh Xpert 12L',
      shortDesc: 'Double purification technology',
      price: 2000,
      image: 'assets/products/p2.jpg'
    },
    {
      id: 3,
      name: 'Kent Maxx 10L',
      shortDesc: 'UV + UF water purifier',
      price: 2000,
      image: 'assets/products/p3.jpg'
    },
    {
      id: 4,
      name: 'Livpure Glitz 7L',
      shortDesc: 'Smart LED indicators',
      price: 2000,
      image: 'assets/products/p4.jpg'
    },
    {
      id: 5,
      name: 'BlueStar Stella 8.2L',
      shortDesc: 'Hot & cold water purifier',
      price: 2000,
      image: 'assets/products/p5.jpg'
    },
    {
      id: 6,
      name: 'HUL Pureit Copper+ 10L',
      shortDesc: 'Copper RO water purifier',
      price: 2000,
      image: 'assets/products/p6.jpg'
    },
    {
      id: 7,
      name: 'Eureka Forbes AquaSure 6L',
      shortDesc: 'Energy-saving mode',
      price: 2000,
      image: 'assets/products/p7.jpg'
    },
    {
      id: 8,
      name: 'Tata Swach Nova 7L',
      shortDesc: 'Chemical-free purification',
      price: 2000,
      image: 'assets/products/p8.jpg'
    }
  ];

}

