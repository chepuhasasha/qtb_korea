export interface IBrandInfo {
  title: string;
  description: string;
}

export interface IBrandLocal {
  ru: IBrandInfo
}
export interface IBrandImages {
  baner: string
  logo: string
}
export interface IBrand {
  info: IBrandInfo
  localization: IBrandLocal
  images: IBrandImages
}

export interface IBrandCreate {
  title: string;
  description: string;
  ru_title: string;
  ru_description: string;
}
export interface IBrandCreateBody extends IBrandCreate {
  baner: string;
  logo: string;
}
export interface IBrandCreateForm extends IBrandCreate {
  images: Blob[];
}

export interface IBrandExtended extends IBrand {
  _id: string;
}
