// pizza.service.ts

import { Injectable } from '@nestjs/common';
import { Pizza } from './pizza.model';

@Injectable()
export class PizzaService {
  private pizzas: Pizza[] = [];

  createPizza(ingredients: string[], deliveryAddress: string): Pizza {
    const id = this.pizzas.length + 1;
    
    const newPizza: Pizza = { id, ingredients, deliveryAddress };
    this.pizzas.push(newPizza);
    return newPizza;
  }


}