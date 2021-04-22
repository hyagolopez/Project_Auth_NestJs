import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import * as moment from 'moment-timezone';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(user: User) {
    const date = moment();
    const dateLocal = date.tz('America/Sao_Paulo');

    const userNew: User = user;
    userNew.id = uuidv4();
    userNew.data_criacao = dateLocal.format();
    userNew.data_atualizacao = dateLocal.format();
    userNew.ultimo_login = dateLocal.format();
    const payload = { email: userNew.email, sub: userNew.id };
    userNew.token = this.jwtService.sign(payload);

    const created = new this.userModel(user);
    return await created.save();
  }

  async selectByIdFromUsers(id: string) {
    return await this.userModel.findOne({ id });
  }

  async selectByEmailFromUsers(email: string) {
    return await this.userModel.findOne({ email });
  }

  async tokenAndDateUpdateBasedOnEmail(id: string, token: string) {
    const date = moment();
    const dateLocal = date.tz('America/Sao_Paulo');
    return await this.userModel.updateOne(
      { id },
      {
        data_atualizacao: dateLocal.format(),
        ultimo_login: dateLocal.format(),
        token,
      },
    );
  }

  async updateAccordingToLastLogin(id: string) {
    const date = moment();
    const dateLocal = date.tz('America/Sao_Paulo');
    return await this.userModel.updateOne(
      { id },
      { ultimo_login: dateLocal.format() },
    );
  }

  async requestBasedOnUserId(id: string) {
    const checkUser = await this.selectByIdFromUsers(id);
    if (!checkUser) return { mensagem: 'Id do usuário inválido.' };
    const { senha, ...user } = JSON.parse(JSON.stringify(checkUser));
    return user;
  }
}
