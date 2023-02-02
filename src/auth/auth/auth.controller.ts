import { Controller, Post } from '@nestjs/common';

@Controller()
export class AuthController {
  @Post()
  login(): string {
    return "login";
  }
}
