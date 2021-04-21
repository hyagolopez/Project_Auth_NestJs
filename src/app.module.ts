import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//Linha 12 adicionar a URL de acesso ao banco Mongodb

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://<user>:<password>@mongodb.net/<database>?retryWrites=true&w=majority',
      { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
    ),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
