import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PizzaModule } from './SnagzPizza/pizza.module';
import { Ingredient } from './SnagzPizza/ingredient.entity';
import { PizzaOrder } from './SnagzPizza/pizza-order.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'snagzuser',
      password: 'password',
      database: 'snagzpizza',
      entities: [Ingredient, PizzaOrder],
      synchronize: true,
    }),
    PizzaModule,
  ],
})
export class AppModule {}
