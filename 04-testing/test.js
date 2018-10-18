var assert = require('assert');

const wert = {
  'i': 1,
  'v': 5,
  'x': 10,
  'l': 50,
  'c': 100,
  'd': 500,
  'm': 1000
}

let wert_der_ziffer = (s) => {
  if (s in wert) {
    return wert[s];
  } else {
    console.log(`error illigal input ${s}`);
    exit;
  }
}

let wert_der_römischen_zahl = (s) => {
  if (s.length == 0) { return 0 };
  
  let erst = s.substr(0,1);
  let rest = s.substr(1);
  let lookahead = rest.substr(0,1);
  
  if (lookahead && wert_der_ziffer(lookahead) > wert_der_ziffer(erst) ) {
    return - wert_der_ziffer(erst) + wert_der_römischen_zahl(rest);
  }
  return + wert_der_ziffer(erst) + wert_der_römischen_zahl(rest);
}



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
