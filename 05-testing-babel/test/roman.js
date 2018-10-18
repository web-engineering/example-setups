import { describe, before, it } from 'mocha';
import assert from 'assert';
import { wert_der_römischen_zahl } from '../dist/roman';


describe('einfache römische Zahlen', () => {
  it('kann i umrechnen', () => {
    assert.equal(wert_der_römischen_zahl('i'), 1);
  });
  
  it('kann mehrere i umrechnen', () => {
    assert.equal(wert_der_römischen_zahl('ii'), 2);
    assert.equal(wert_der_römischen_zahl('iii'), 3);
  });  

  it('kann v umrechnen', () => {
    assert.equal(wert_der_römischen_zahl('v'), 5);
  });
  
  it('kann x umrechnen', () => {
    assert.equal(wert_der_römischen_zahl('x'), 10);
  });
  
  it('kann mehrere x umrechnen', () => {
    assert.equal(wert_der_römischen_zahl('xx'), 20);
    assert.equal(wert_der_römischen_zahl('xxx'), 30);
  });  

  it('kann l umrechnen', () => {
    assert.equal(wert_der_römischen_zahl('l'), 50);
  });
  
  it('kann mehrere c umrechnen', () => {
    assert.equal(wert_der_römischen_zahl('c'), 100);
    assert.equal(wert_der_römischen_zahl('cc'), 200);
    assert.equal(wert_der_römischen_zahl('ccc'), 300);
  });  
  it('kann d umrechnen', () => {
    assert.equal(wert_der_römischen_zahl('d'), 500);
  });
  
  it('kann mehrere m umrechnen', () => {
    assert.equal(wert_der_römischen_zahl('m'), 1000);
    assert.equal(wert_der_römischen_zahl('mm'), 2000);
    assert.equal(wert_der_römischen_zahl('mmm'), 3000);
  });  
});
describe('römische Zahlen mit abzählen', () => {
  it('kann iv umrechnen', () => {
    assert.equal(wert_der_römischen_zahl('iv'), 4);
  });
  it('kann birigttes geburtsjahr umrechnen', () => {
    assert.equal(wert_der_römischen_zahl('mcmlxxi'), 1971);
  });
});
