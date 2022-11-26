export interface IBrand{
  title: string
  baner: string
}

export interface IBrandCreate{
  title: string
  baner: Blob
}

export interface IBrandExtended extends IBrand {
  _id: string;
}