import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import type { IBrand } from '@qtb_korea/types';

@Schema()
export class Brand implements IBrand {
  @Prop()
  title: string;
  @Prop()
  baner: string;
  @Prop()
  description: string;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
export type BrandDocument = HydratedDocument<Brand>;
