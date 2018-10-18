"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wert_der_römischen_zahl = void 0;
var wert = {
  'i': 1,
  'v': 5,
  'x': 10,
  'l': 50,
  'c': 100,
  'd': 500,
  'm': 1000
};

var wert_der_ziffer = function wert_der_ziffer(s) {
  if (s in wert) {
    return wert[s];
  } else {
    console.log("error illigal input ".concat(s));
    exit;
  }
};

var wert_der_römischen_zahl = function wert_der_römischen_zahl(s) {
  if (s.length == 0) {
    return 0;
  }

  ;
  var erst = s.substr(0, 1);
  var rest = s.substr(1);
  var lookahead = rest.substr(0, 1);

  if (lookahead && wert_der_ziffer(lookahead) > wert_der_ziffer(erst)) {
    return -wert_der_ziffer(erst) + wert_der_römischen_zahl(rest);
  }

  return +wert_der_ziffer(erst) + wert_der_römischen_zahl(rest);
};

exports.wert_der_römischen_zahl = wert_der_römischen_zahl;