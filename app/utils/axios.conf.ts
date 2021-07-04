import axios from 'axios';
import { API_URL, API_TIMEOUT, API_KEY, FLICKR_API_SIG, API_METHOD } from '../contans';

const instance = axios.create({
  baseURL: API_URL,
  timeout: API_TIMEOUT,
  responseType: 'json',
});
instance.interceptors.request.use(
  (req) => {
    req.params = {
      ...req.params,
      method: API_METHOD,
      api_key: API_KEY,
      FLickrApi_sig: FLICKR_API_SIG,
      nojsoncallback: '1',
      format: 'json',
    };
    if (req.params.text === '') {
      req.params.text = '""';
    }

    return req;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => {
    // console.log('getting request...');
    return response;
  },
  (error) => Promise.reject(error),
);

export default instance;
