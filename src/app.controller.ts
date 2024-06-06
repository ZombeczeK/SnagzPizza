import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}