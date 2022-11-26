export interface IBrand{
  title: string
  baner: string
  description: string
}

export interface IBrandCreate{
  title: string
  baner: Blob
  description: string
}

export interface IBrandExtended extends IBrand {
  _id: string;
}