import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async register(login: string, haslo: string): Promise<User> {
    const newUser = this.usersRepository.create({ login, haslo });
    return this.usersRepository.save(newUser);
  }

  async findUser(login: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { login } });
  }
}
