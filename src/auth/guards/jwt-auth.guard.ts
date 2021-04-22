import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info) {
    // You can throw an exception based on either "info" or "err" arguments
    if (err || !user) {
      if (info.expiredAt) return { mensagem: 'Sessão inválida.' };
      return { mensagem: 'Não autorizado.' };
    }
    return user;
  }
}
