import { v4 as uuidv4 } from 'uuid';

const numberRegExp = new RegExp('^[0-9]+$');

function isNumber(value: any) {
  return numberRegExp.test(value);
}

function isBoolean(value: any) {
  if (String(value).toLowerCase() === 'true' || String(value).toLowerCase() === 'false') {
    return true;
  }
  return false;
}

function isString(value: any) {
  return typeof value === 'string';
}

/**
 * generates a random uuid string
 */
function uuid() {
  return uuidv4();
}

export { isNumber, isBoolean, uuid, isString };
