import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUserSignIn(email: string, password: string): Promise<any> {
    const user = await this.usersService.selectByEmailFromUsers(email);
    if (user) {
      const validatePassword = await bcrypt.compareSync(password, user.senha);
      if (validatePassword) {
        const payload = { email: user.email, sub: user.id };
        await this.usersService.tokenAndDateUpdateBasedOnEmail(
          user.id,
          this.jwtService.sign(payload),
        );
        const userUpdate = await this.usersService.selectByEmailFromUsers(
          user.email,
        );
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return userUpdate;
      }
      return { mensagem: 'Usuário e/ou senha inválidos.' };
    }
    return { mensagem: 'Usuário e/ou senha inválidos.' };
  }

  async signUp(userBody: any) {
    const checkExistingUser = await this.usersService.selectByEmailFromUsers(
      userBody.email,
    );
    if (!checkExistingUser) {
      const newUser = await await this.usersService.createUser(userBody);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { senha, ...user } = JSON.parse(JSON.stringify(newUser));
      return {
        usuario: user,
      };
    }
    return { mensagem: 'E-mail já existente.' };
  }

  async signIn(userObject: any) {
    if (userObject.mensagem) return userObject;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { senha, ...user } = userObject;
    return {
      usuario: user,
    };
  }
}
