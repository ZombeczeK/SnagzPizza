// user.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getLogowanie(){
    return "zaloguj sie";
  }
  @Post('register')
  async register(@Body() userData: { username: string, password: string }): Promise<User> {
    const { username, password } = userData;
    return this.userService.createUser(username, password);
  }
}