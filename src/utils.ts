import { v4 as uuidv4 } from 'uuid';

const numberRegExp = new RegExp('^[0-9]+$');

function isNumber(value) {
  return numberRegExp.test(value);
}

function isBoolean(value) {
  if (
    String(value).toLowerCase() === 'true' ||
    String(value).toLowerCase() === 'false'
  ) {
    return true;
  }
  return false;
}

/**
 * generates a random uuid string
 */
function uuid() {
  return uuidv4();
}

export { isNumber, isBoolean, uuid };
