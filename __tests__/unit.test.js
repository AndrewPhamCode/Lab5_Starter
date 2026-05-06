// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me.js';

describe('isPhoneNumber', () => {
  test('accepts a dashed phone number', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });

  test('accepts a phone number with parentheses', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('rejects a phone number without separators', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
  });

  test('rejects a phone number with too few digits', () => {
    expect(isPhoneNumber('555-123')).toBe(false);
  });
});

describe('isEmail', () => {
  test('accepts a standard email address', () => {
    expect(isEmail('student@example.com')).toBe(true);
  });

  test('accepts an email address with an underscore', () => {
    expect(isEmail('student_name@ucsd.edu')).toBe(true);
  });

  test('rejects an email address without a domain extension', () => {
    expect(isEmail('student@example')).toBe(false);
  });

  test('rejects an email address without an at symbol', () => {
    expect(isEmail('student.example.com')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('accepts a password that starts with a letter', () => {
    expect(isStrongPassword('a123')).toBe(true);
  });

  test('accepts letters, numbers, and underscores', () => {
    expect(isStrongPassword('Password_123')).toBe(true);
  });

  test('rejects a password that starts with a number', () => {
    expect(isStrongPassword('1abc')).toBe(false);
  });

  test('rejects a password with invalid punctuation', () => {
    expect(isStrongPassword('abc!')).toBe(false);
  });
});

describe('isDate', () => {
  test('accepts a date with one digit month and day', () => {
    expect(isDate('1/1/2026')).toBe(true);
  });

  test('accepts a date with two digit month and day', () => {
    expect(isDate('12/31/2026')).toBe(true);
  });

  test('rejects a date with dashes', () => {
    expect(isDate('2026-01-01')).toBe(false);
  });

  test('rejects a date with a two digit year', () => {
    expect(isDate('1/1/26')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('accepts a three character hex color with a hash', () => {
    expect(isHexColor('#fff')).toBe(true);
  });

  test('accepts a six character hex color without a hash', () => {
    expect(isHexColor('0033cc')).toBe(true);
  });

  test('rejects non-hex characters', () => {
    expect(isHexColor('#ggg')).toBe(false);
  });

  test('rejects the wrong number of hex characters', () => {
    expect(isHexColor('#12345')).toBe(false);
  });
});
