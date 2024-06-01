import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredient } from './ingredient.entity';
import { PizzaOrder } from './pizza-order.entity';

@Injectable()
export class PizzaService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
    @InjectRepository(PizzaOrder)
    private pizzaOrderRepository: Repository<PizzaOrder>,
  ) {}

  async getAllIngredients(): Promise<Ingredient[]> {
    return this.ingredientRepository.find();
  }

  async createPizza(ingredients: string[], deliveryAddress: string, username: string): Promise<PizzaOrder> {
    const newOrder = this.pizzaOrderRepository.create({ ingredients, deliveryAddress, username });
    return this.pizzaOrderRepository.save(newOrder);
  }
}
