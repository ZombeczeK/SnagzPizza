import { Controller, Get, Post, Body, Render } from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { Pizza } from './pizza.model';

@Controller('SnagzPizza')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Get()
  @Render('index')
  getPizzaForm() {
    return {}; // Renderuje plik index.hbs
  }

  @Post()
  async createPizza(@Body() pizzaData: { s: string[], deliveryAddress: string }): Promise<Pizza> {
    const ingredients = pizzaData.s;
    const deliveryAddress = pizzaData.deliveryAddress || "Domyślny Adres";
    return this.pizzaService.createPizza(ingredients, deliveryAddress);
  }
}
