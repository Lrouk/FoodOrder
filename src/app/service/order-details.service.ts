import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailsService {
  constructor() {}

  //fooddetails
  foodDetails = [
    {
      id: 1,
      foodName: 'Panner grilled sandwich',
      foodDetails: 'pan-fried massala panner.',
      foodPrice: 39,
      foodImg:
        'https://img.freepik.com/free-photo/cheese-sandwich_144627-22677.jpg?w=1480&t=st=1673514335~exp=1673514935~hmac=63a711093d703301e2fd61641f84ef680c6528217cf0ab23d6c07a6ec25f56cc',
    },
    {
      id: 2,
      foodName: 'Vegan pizza',
      foodDetails:
        'Onion | Green capsicum | Mashroom | black olives ,sweet corn, red paprika topped with cheese',
      foodPrice: 59,
      foodImg:
        'https://img.freepik.com/free-photo/pizza-with-salami-tomatoes-olives-cheese-dough-with-whole-wheat-flour-italian-food_2829-6855.jpg?t=st=1672044315~exp=1672044915~hmac=5f8681d3d45bb246b930e18c7737d8f1f32ebdd39ed802ddc4c023df228fe23d',
    },
    {
      id: 3,
      foodName: 'Vegan burger',
      foodDetails: 'Burger',
      foodPrice: 49,
      foodImg:
        'https://img.freepik.com/free-photo/fresh-hamburger-with-salad-onion_144627-9522.jpg?w=1480&t=st=1672043991~exp=1672044591~hmac=63cca9725de06b00ccdc9de0f6747d3b655ddd93bb5fe5894ac6914e7fdac9f0',
    },
    {
      id: 4,
      foodName: 'Sushi roll',
      foodDetails: 'pan-fried massala panner.',
      foodPrice: 22,
      foodImg:
        'https://img.freepik.com/free-photo/asian-raw-meal-fresh-black_1203-6351.jpg?t=st=1672044356~exp=1672044956~hmac=b70869181e07bcd4f08d04c423eed24f12fa0e96f9c9f76ba28e43096996a514',
    },
    {
      id: 5,
      foodName: 'Indulgence Brownie',
      foodDetails: 'pan-fried massala panner.',
      foodPrice: 10,
      foodImg:
        'https://img.freepik.com/free-photo/chocolate-brownies-white-plate_1150-20895.jpg?w=1480&t=st=1672044408~exp=1672045008~hmac=8b887ed7f5ed6a522afc2a009fdaf7f231bed7add61c754d58cae22295551275',
    },
    {
      id: 6,
      foodName: 'Oreo cheesecake with Ice Cream',
      foodDetails: 'Oreo ice cream',
      foodPrice: 20,
      foodImg:
        'https://img.freepik.com/free-photo/cookies-cream-cheese-cake_1339-2389.jpg?t=st=1672044425~exp=1672045025~hmac=ab0a8c794dfda72888d34a91b52e480cd058bb19232fea7fb81c99d1c2d3b5f3',
    },
  ];
}
