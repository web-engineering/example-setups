import { describe, before, it } from 'mocha';
import assert from 'assert';
import { romanToNumber } from '../src/roman.js';

describe('simple roman numbers', () => {
  it('can convert i', () => {
    assert.equal(romanToNumber('i'), 1);
  });

  it('can convert several letters i', () => {
    assert.equal(romanToNumber('ii'), 2);
    assert.equal(romanToNumber('iii'), 3);
  });

  it('can convert v', () => {
    assert.equal(romanToNumber('v'), 5);
  });

  it('can convert x', () => {
    assert.equal(romanToNumber('x'), 10);
  });

  it('can convert several letters x', () => {
    assert.equal(romanToNumber('xx'), 20);
    assert.equal(romanToNumber('xxx'), 30);
  });

  it('can convert l', () => {
    assert.equal(romanToNumber('l'), 50);
  });

  it('can convert several letters c', () => {
    assert.equal(romanToNumber('c'), 100);
    assert.equal(romanToNumber('cc'), 200);
    assert.equal(romanToNumber('ccc'), 300);
  });
  it('can convert d', () => {
    assert.equal(romanToNumber('d'), 500);
  });

  it('can convert several letters m', () => {
    assert.equal(romanToNumber('m'), 1000);
    assert.equal(romanToNumber('mm'), 2000);
    assert.equal(romanToNumber('mmm'), 3000);
  });
});
describe('roman numbers with subtraction', () => {
  it('can convert iv', () => {
    assert.equal(romanToNumber('iv'), 4);
  });
  it('can convert an important year in the 20th century', () => {
    assert.equal(romanToNumber('mcmlxxi'), 1971);
  });
});
