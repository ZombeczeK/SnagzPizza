// pizza.module.ts

import { Module } from '@nestjs/common';
import { PizzaController } from './pizza.controller';
import { PizzaService } from './pizza.service';

@Module({
  controllers: [PizzaController],
  providers: [PizzaService],
})
export class PizzaModule {}