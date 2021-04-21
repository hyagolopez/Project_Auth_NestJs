import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUserSignIn(email: string, password: string): Promise<any> {
    const user = await this.usersService.selectByEmailFromUsers(email);
    if (user && user.senha === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { senha, ...result } = user;
      return result;
    }
    return null;
  }

  async validateUserSignUp(userAuth: any): Promise<any> {
    const user = await this.usersService.selectByEmailFromUsers(userAuth.id);
    if (user) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { senha, ...result } = user;
      return result;
    }
    return null;
  }

  async signUp(userBody: any) {
    const checkExistingUser = await this.usersService.selectByEmailFromUsers(
      userBody.email,
    );
    if (!checkExistingUser) {
      const newUser = await await this.usersService.createUser(userBody);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { senha, ...user } = JSON.parse(JSON.stringify(newUser));
      const payload = { nome: newUser.nome, sub: newUser.id };
      return {
        usuario: JSON.parse(JSON.stringify(user)),
        token: this.jwtService.sign(payload),
      };
    }
    return { mensagem: 'E-mail já existente.' };
  }

  async signIn(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
