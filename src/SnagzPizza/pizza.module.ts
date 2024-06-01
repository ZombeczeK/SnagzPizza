import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PizzaController } from './pizza.controller';
import { PizzaService } from './pizza.service';
import { Ingredient } from './ingredient.entity';
import { PizzaOrder } from './pizza-order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredient, PizzaOrder])],
  controllers: [PizzaController],
  providers: [PizzaService],
})
export class PizzaModule {}
