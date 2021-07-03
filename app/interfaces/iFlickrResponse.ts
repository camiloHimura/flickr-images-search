import iPhoto from './iPhoto';

export interface photos {
  page: number;
  pages: number;
  perpage: number;
  photo: iPhoto[];
  total: number;
}

export default interface iFlickrResponse {
  photos: photos;
  code?: number;
  message?: string;
  stat: stat;
}

export enum stat {
  ok = 'ok',
  fail = 'fail',
}
