import { LSTORAGE_INVALID_KEY } from '../constans/ErrorMessages';

function checkKey(key) {
  if (!isString(key)) {
    throw Error(LSTORAGE_INVALID_KEY);
  }
  return true;
}

function isString(key) {
  return typeof key === 'string';
}

export default {
  set(key, value) {
    checkKey(key);
    const parseValue = isString(value) ? value : JSON.stringify(value);
    localStorage && localStorage.setItem(key, parseValue);
    return value;
  },
  has(key) {
    checkKey(key);
    return localStorage && Object.prototype.hasOwnProperty.call(localStorage, key);
  },
  get(key) {
    checkKey(key);
    const value = JSON.parse(localStorage.getItem(key));
    return isString(value) ? localStorage.getItem(key) : value;
  },
  remove(key) {
    checkKey(key);
    localStorage.removeItem(key);
    return true;
  },
};
