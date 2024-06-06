import { Controller, Get, Post, Body, Res, HttpStatus, Render, Session } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  @Render('login')
  loginPage() {
    return;
  }

  @Get('register')
  @Render('register')
  registerPage() {
    return;
  }

  @Post('register')
  async register(
    @Body('login') login: string,
    @Body('haslo') haslo: string,
    @Body('confirmHaslo') confirmHaslo: string,
    @Res() res: Response,
  ) {
    if (haslo !== confirmHaslo) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Passwords do not match' });
    }

    const existingUser = await this.authService.findUser(login);
    if (existingUser) {
      return res.status(HttpStatus.CONFLICT).json({ message: 'User already exists' });
    }

    const user = await this.authService.register(login, haslo);

    return res.redirect('/auth/login');
  }

  @Post('login')
  async login(
    @Body('login') login: string,
    @Body('haslo') haslo: string,
    @Res() res: Response,
  ) {
    const user = await this.authService.findUser(login);
    if (user && user.haslo === haslo) {
      return res.redirect('/SnagzPizza');
    } else {
      return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Invalid credentials' });
    }
  }

}
