import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IAdmin } from '@tournaments/types';
import { HydratedDocument } from 'mongoose';

export type AdminDocument = HydratedDocument<Admin>;

@Schema()
export class Admin implements IAdmin {
  @Prop()
  username: string;

  @Prop()
  hash: string;

  @Prop()
  role: 'root' | 'admin';
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
