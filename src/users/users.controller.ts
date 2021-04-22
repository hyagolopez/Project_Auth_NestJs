import {
  Controller,
  Get,
  Req,
  HttpStatus,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
//import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller()
export class UsersController {
  @UseGuards(JwtAuthGuard)
  @Get('usuario')
  getProfile(@Req() req, @Res() res: Response) {
    const checkValidation = req.user;
    if (checkValidation.mensagem)
      return res.status(HttpStatus.UNAUTHORIZED).send(checkValidation);
    return res.status(HttpStatus.OK).send(req.query);
  }
}
