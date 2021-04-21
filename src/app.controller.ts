import { Controller, Post, Request, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  //@UseGuards(LocalAuthGuard)
  @Post('singup')
  async signUp(@Request() req, @Res() res: Response) {
    const result = await this.authService.signUp(req.body);
    if (result.mensagem) return res.status(HttpStatus.BAD_REQUEST).send(result);
    return res.status(HttpStatus.CREATED).send(result);
  }
}
