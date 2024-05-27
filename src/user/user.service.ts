// user.service.ts

import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  private users: User[] = [];

  createUser(username: string, password: string): User {
    const id = this.users.length + 1;
    const newUser: User = { id, username, password };
    this.users.push(newUser);
    return newUser;
  }

  findUserByUsername(username: string): User | undefined {
    return this.users.find(user => user.username === username);
  }
}