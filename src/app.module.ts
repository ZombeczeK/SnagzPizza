import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PizzaModule } from './SnagzPizza/pizza.module';
import { Ingredient } from './SnagzPizza/ingredient.entity';
import { PizzaOrder } from './SnagzPizza/pizza-order.entity';
import { AuthModule } from './user/auth.module';
import { User } from './user/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'snagzuser',
      password: 'password',
      database: 'snagzpizza',
      entities: [Ingredient, PizzaOrder, User],
      synchronize: true,
    }),
    PizzaModule,
    AuthModule,
  ],
})
export class AppModule {}
