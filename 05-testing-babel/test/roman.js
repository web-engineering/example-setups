import { describe, before, it } from 'mocha';
import assert from 'assert';
import { romanToNumber } from '../src /roman.js';

describe('einfache römische Zahlen', () => {
  it('kann i umrechnen', () => {
    assert.equal(romanToNumber('i'), 1);
  });

  it('kann mehrere i umrechnen', () => {
    assert.equal(romanToNumber('ii'), 2);
    assert.equal(romanToNumber('iii'), 3);
  });

  it('kann v umrechnen', () => {
    assert.equal(romanToNumber('v'), 5);
  });

  it('kann x umrechnen', () => {
    assert.equal(romanToNumber('x'), 10);
  });

  it('kann mehrere x umrechnen', () => {
    assert.equal(romanToNumber('xx'), 20);
    assert.equal(romanToNumber('xxx'), 30);
  });

  it('kann l umrechnen', () => {
    assert.equal(romanToNumber('l'), 50);
  });

  it('kann mehrere c umrechnen', () => {
    assert.equal(romanToNumber('c'), 100);
    assert.equal(romanToNumber('cc'), 200);
    assert.equal(romanToNumber('ccc'), 300);
  });
  it('kann d umrechnen', () => {
    assert.equal(romanToNumber('d'), 500);
  });

  it('kann mehrere m umrechnen', () => {
    assert.equal(romanToNumber('m'), 1000);
    assert.equal(romanToNumber('mm'), 2000);
    assert.equal(romanToNumber('mmm'), 3000);
  });
});
describe('römische Zahlen mit abzählen', () => {
  it('kann iv umrechnen', () => {
    assert.equal(romanToNumber('iv'), 4);
  });
  it('kann birigttes geburtsjahr umrechnen', () => {
    assert.equal(romanToNumber('mcmlxxi'), 1971);
  });
});
