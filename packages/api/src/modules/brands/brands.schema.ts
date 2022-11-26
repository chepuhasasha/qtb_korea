import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MSchema } from 'mongoose';
import type {
  IBrand,
  IBrandImages,
  IBrandInfo,
  IBrandLocal,
} from '@qtb_korea/types';

@Schema()
export class BrandInfo implements IBrandInfo {
  @Prop()
  title: string;
  @Prop()
  description: string;
}
@Schema()
export class BrandLocal implements IBrandLocal {
  @Prop({ type: MSchema })
  ru: BrandInfo;
}
@Schema()
export class BrandImages implements IBrandImages {
  @Prop()
  baner: string;
  @Prop()
  logo: string;
}
@Schema()
export class Brand implements IBrand {
  @Prop({ type: MSchema })
  info: BrandInfo;
  @Prop({ type: MSchema })
  localization: BrandLocal;
  @Prop({ type: MSchema })
  images: BrandImages;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
export type BrandDocument = HydratedDocument<Brand>;
