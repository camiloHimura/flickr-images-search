import iFlickrResponse from '../interfaces/iFlickrResponse';
import iQuery from '../interfaces/iQuery';
import axiosInstance from './axios.conf';
import catchError from './CatchError';

export const getPhotos = (params: iQuery): Promise<iFlickrResponse> =>
  axiosInstance
    .get('/rest', { params })
    .then(({ data }) => data)
    .catch(catchError);
