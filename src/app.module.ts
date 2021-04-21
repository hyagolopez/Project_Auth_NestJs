import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:grFLfxIivHIebF5S@tid2.78uyk.mongodb.net/auth?retryWrites=true&w=majority',
      { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
    ),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
