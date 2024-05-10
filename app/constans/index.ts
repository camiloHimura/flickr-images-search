import * as KEY_CODES from './keyCodes';
import * as ERROR_TYPES from './ErrorTypes';
import * as ERROR_MESSAGES from './ErrorMessages';

// Todo replace with env variables
const API_KEY = 'ef1f9d4f8ca80dada31c684364355282';
const FLICKR_API_SIG = 'd7f57fa9e01a6a2d6ccd8597b8d2f86b';
const API_URL = 'https://api.flickr.com/services/';
const API_METHOD = 'flickr.photos.search';
const API_TIMEOUT = 1000;

export {
  API_URL,
  KEY_CODES,
  ERROR_TYPES,
  API_TIMEOUT,
  ERROR_MESSAGES,
  API_KEY,
  FLICKR_API_SIG,
  API_METHOD,
};
