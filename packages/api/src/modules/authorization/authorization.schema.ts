import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import type { IAuthData, UserRole } from '@qtb_korea/types';

export type AuthDocument = HydratedDocument<AuthData>;

@Schema()
export class AuthData implements IAuthData {
  @Prop()
  user_id: string;

  @Prop()
  username: string;

  @Prop()
  role: UserRole;

  @Prop()
  refresh_token: string;

  @Prop()
  refresh_token_exp: string;
}

export const AuthSchema = SchemaFactory.createForClass(AuthData);
