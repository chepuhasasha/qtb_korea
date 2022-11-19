import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MSchema } from 'mongoose';
import type {
  IProduct,
  IProductAssets,
  IProductInfo,
  IProductLinks,
  IProductLocal,
  IProductLocalMap,
} from '@qtb_korea/types';

@Schema()
export class ProductInfo implements IProductInfo {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  brand_id: string;
  @Prop({ type: MSchema })
  characteristics: Record<string, string>;
}

@Schema()
export class ProductAssets implements IProductAssets {
  @Prop()
  images: string[];
  @Prop()
  baner: string;
}

@Schema()
export class ProductLocal implements IProductLocal {
  @Prop()
  ru: string;
  @Prop()
  en: string;
}

@Schema()
export class ProductLocalMap implements IProductLocalMap {
  @Prop()
  tournament_id: string;
  @Prop()
  lang: string;
  @Prop({ type: MSchema })
  map: ProductInfo;
}

@Schema()
export class ProductLinks implements IProductLinks {
  @Prop()
  ozon: string | null;
  @Prop()
  default: string;
}

@Schema()
export class Product implements IProduct {
  @Prop({ type: MSchema })
  info: ProductInfo;

  @Prop({ type: MSchema })
  assets: ProductAssets;

  @Prop({ type: MSchema })
  links: ProductLinks;

  @Prop({ type: MSchema })
  localization: ProductLocal;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
export type ProductDocument = HydratedDocument<Product>;
