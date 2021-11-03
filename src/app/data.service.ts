import { Injectable } from '@angular/core';

// Category Interface
export interface ICategory {
  id: number,
  name: string,
  image: string,
}

// Product Interface
export interface IProduct {
  id: number,
  name: string,
  age: string,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCategories() {
    let categories = [];

    let cat1: ICategory = {
      id: 1,
      name: 'Personnes',
      image: '../../assets/categories/cat1.jpg'
    }
    let cat2: ICategory = {
      id: 2,
      name: 'Animaux',
      image: '../../assets/categories/cat2.jpg'
    }
    let cat3: ICategory = {
      id: 3,
      name: 'Objets',
      image: '../../assets/categories/cat3.png'
    }

    categories.push(cat1, cat2, cat3);

    return categories;
  }

  getFeaturedProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Hassen Slimen',
      age: '27 ans',
      image: '../../assets/products/prod1.jpg'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Carte CIN',
      age: 'La Marsa',
      image: '../../assets/products/prod2.jpg'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Chien Caniche',
      age: '6 mois',
      image: '../../assets/products/prod3.jpg'
    }
   

    products.push(prod1, prod2, prod3);

    return products;
  }

  getBestSellProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Samar Derbelly',
      age: '23 ans',
      image: '../../assets/products/prod4.jpg'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Chien Hesky',
      age: '1 an',
      image: '../../assets/products/prod5.jpg'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Mohsen Ben Ali',
      age: '53 ans',
      image: '../../assets/products/prod6.jpg'
    }

    products.push(prod1, prod2, prod3);

    return products;
  }
}
