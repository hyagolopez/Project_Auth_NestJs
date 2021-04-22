import {
  Controller,
  Get,
  Req,
  HttpStatus,
  Res,
  UseGuards,
  Param,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('usuario')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getProfile(@Param() params, @Req() req, @Res() res: Response) {
    const checkValidation = req.user;
    if (checkValidation.mensagem)
      return res.status(HttpStatus.UNAUTHORIZED).send(checkValidation);
    const result = await this.userService.requestBasedOnUserId(params.id);
    if (result.mensagem) return res.status(HttpStatus.NO_CONTENT);
    return res.status(HttpStatus.OK).send(result);
  }
}
