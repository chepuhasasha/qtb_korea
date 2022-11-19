export interface IProductInfo {
  title: string
  description: string
  brand_id: string
  characteristics: Record<string, string>
}

export interface IProductAssets {
  images: string[]
  baner: string
}

export interface IProductLocal {
  ru: string // - id карты
  en: string // - id карты
  // ...
}
export interface IProductLocalMap {
  tournament_id: string
  lang: string // - ru
  map: IProductInfo
}

export interface IProductLinks {
  ozon: string | null
  default: string
}

export interface IProduct{
  info: IProductInfo
  assets: IProductAssets
  links: IProductLinks
  localization: IProductLocal
}

export interface IProductExtended extends IProduct {
  _id: string;
}