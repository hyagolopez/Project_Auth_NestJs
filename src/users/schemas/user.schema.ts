import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Document } from 'mongoose';
export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ unique: true })
  id: string;
  @Prop()
  nome: string;
  @Prop({ unique: true, required: true })
  email: string;
  @Prop({ required: true })
  senha: string;
  @Prop()
  telefones: [
    {
      numero: string;
      ddd: string;
    },
  ];
  @Prop()
  data_criacao: string;
  @Prop()
  data_atualizacao: string;
  @Prop()
  ultimo_login: string;
  @Prop()
  token: string;
}

export const UserSchema = SchemaFactory.createForClass(User).pre<UserDocument>(
  'save',
  async function (next) {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(this.senha, salt);
    this.senha = hash;
    return next();
  },
);
