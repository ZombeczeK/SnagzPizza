import { Controller, Get, Post, Body, Render, Redirect } from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { PizzaOrder } from './pizza-order.entity';

@Controller('SnagzPizza')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Get()
  @Render('index')
  async getPizzaForm() {
    const ingredients = await this.pizzaService.getAllIngredients();
    return { ingredients };
  }

  @Post()
  @Render('summary')  // Zamiast Redirect używamy Render, aby przekazać dane do widoku
  async createPizza(@Body() pizzaData: { s: string[], deliveryAddress: string, username: string }) {
    const ingredients = pizzaData.s;
    const deliveryAddress = pizzaData.deliveryAddress || "Domyślny Adres";
    const username = pizzaData.username || "lubek";
    const newOrder = await this.pizzaService.createPizza(ingredients, deliveryAddress, username);
    return { order: newOrder };
  }

  @Get('summary')
  @Render('summary')
  summary() {
    return { message: "Dziękujemy za zamówienie!" };
  }
}
