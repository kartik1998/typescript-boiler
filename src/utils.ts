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

export { isNumber, isBoolean };
