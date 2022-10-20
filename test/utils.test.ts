import { expect } from 'chai';
import * as utils from '../src/utils';
import 'mocha';

describe('utils -> isNumber', function () {
  it('should return true when valid numbers are passed as strings', function () {
    const testCases = ['1234', '09834', '274563294587230', '1', '0'];
    testCases.forEach((c) => expect(utils.isNumber(c)).to.be.true);
  });

  it('should return false when invalid numbers are passed as strings', function () {
    const testCases = ['a', 'abc', 'a123', '1234abc', 'a-132', '123.2'];
    testCases.forEach((c) => expect(utils.isNumber(c)).to.be.false);
  });
});

describe('utils -> isBoolean', function () {
  it('should return true when boolean values are passed', function () {
    const testCases = [true, false, 'true', 'false', 'True', 'False', 'tRuE', 'fAlsE'];
    testCases.forEach((c) => expect(utils.isBoolean(c)).to.be.true);
  });

  it('should return true when non boolean values are passed', function () {
    const testCases = ['xy', 1, 2, 0, 'string'];
    testCases.forEach((c) => expect(utils.isBoolean(c)).to.be.false);
  });
});

describe('utils -> uuid', function () {
  it('should return random uuid strings', function () {
    var set = new Set();
    for (let i = 0; i < 100; i++) set.add(utils.uuid());
    expect(set.size).to.equal(100);
  });
});
