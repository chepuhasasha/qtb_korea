export interface IProductInfo {
  title: string;
  description: string;
  brand_id: string;
  characteristics: string[];
  link: { name: string, url: string };
}

export interface IProductLocal {
  ru: IProductInfo;
}

export interface IProduct {
  info: IProductInfo;
  images: string[];
  localization: IProductLocal;
}

export interface IProductCreate {
  brand_id: string;
  title: string;
  description: string;
  characteristics_1: string;
  characteristics_2: string;
  characteristics_3: string;
  link_name: string
  link_url: string
  ru_title: string;
  ru_description: string;
  ru_characteristics_1: string;
  ru_characteristics_2: string;
  ru_characteristics_3: string;
  ru_link_name: string
  ru_link_url: string
}

export interface IProductCreateForm extends IProductCreate {
  images: Blob[];
}

export interface IProductExtended extends IProduct {
  _id: string;
}
