import {
  Controller,
  Post,
  Get,
  Request,
  HttpStatus,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async statusServer() {
    return { message: 'ON Server!' };
  }

  @Post('sign-up')
  async signUp(@Request() req, @Res() res: Response) {
    const result = await this.authService.signUp(req.body);
    if (result.mensagem) return res.status(HttpStatus.BAD_REQUEST).send(result);
    return res.status(HttpStatus.CREATED).send(result);
  }

  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  async signIn(@Request() req, @Res() res: Response) {
    const result = await this.authService.signIn(req.user);
    if (result.mensagem)
      return res.status(HttpStatus.UNAUTHORIZED).send(result);
    return res.status(HttpStatus.OK).send(result);
  }
}
