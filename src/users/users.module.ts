import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersService } from './users.service';
import { User, UserSchema } from './schemas/user.schema';
import { jwtConstants } from '../auth/constants';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '30m' },
    })
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
