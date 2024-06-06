import { Controller, Get, Post, Body, Render} from '@nestjs/common';
import { PizzaService } from './pizza.service';


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
  @Render('summary') 
  async createPizza(@Body() pizzaData: { s: string[], deliveryAddress: string, username: string}) {
    const ingredients = pizzaData.s;
    const deliveryAddress = pizzaData.deliveryAddress || "Domyślny Adres";
    const username = pizzaData.username || "localhost";
    const newOrder = await this.pizzaService.createPizza(ingredients, deliveryAddress, username);
    return { order: newOrder };
  }

}
