import {
  Controller,
  Get,
  Request,
  HttpStatus,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
//import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller()
export class UsersController {
  @UseGuards(JwtAuthGuard)
  @Get('usuario')
  getProfile(@Request() req, @Res() res: Response) {
    const result = req.user;
    if (result.mensagem)
      return res.status(HttpStatus.UNAUTHORIZED).send(result);
    return res.status(HttpStatus.OK).send(result);
  }
}
