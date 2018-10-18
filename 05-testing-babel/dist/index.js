"use strict";

var _roman = require("./roman");

var zahl = 'mcmlxxi';
console.log("gegr\xFCndet ".concat(zahl, " (oder einfacher: ").concat((0, _roman.wert_der_römischen_zahl)(zahl), ")."));