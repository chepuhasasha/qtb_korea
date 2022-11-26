import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MSchema } from 'mongoose';
import type { IProduct, IProductInfo, IProductLocal } from '@qtb_korea/types';

@Schema()
export class ProductInfo implements IProductInfo {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  brand_id: string;
  @Prop({ type: MSchema })
  characteristics: string[];
  @Prop({ type: MSchema })
  link: { name: string; url: string };
}

@Schema()
export class ProductLocal implements IProductLocal {
  @Prop({ type: MSchema })
  ru: ProductInfo;
}

@Schema()
export class Product implements IProduct {
  @Prop({ type: MSchema })
  info: ProductInfo;

  @Prop({ type: MSchema })
  images: string[];

  @Prop({ type: MSchema })
  localization: ProductLocal;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
export type ProductDocument = HydratedDocument<Product>;
