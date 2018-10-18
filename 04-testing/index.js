var roman = require('./roman.js');
var wert_der_römischen_zahl = roman.wert_der_römischen_zahl;

var zahl = 'mcmlxxi';
console.log('gegründet ' + zahl + ' (oder einfacher: ' + wert_der_römischen_zahl(zahl)  + ').');
