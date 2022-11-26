export interface IImage{
  name: string
  brand_id: string | null
  product_id: string | null
}

export interface IImageExtended extends IImage {
  _id: string;
}