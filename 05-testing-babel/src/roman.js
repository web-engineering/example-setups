

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

export const wert_der_römischen_zahl = (s) => {
  if (s.length == 0) { return 0 };
  
  let erst = s.substr(0,1);
  let rest = s.substr(1);
  let lookahead = rest.substr(0,1);
  
  if (lookahead && wert_der_ziffer(lookahead) > wert_der_ziffer(erst) ) {
    return - wert_der_ziffer(erst) + wert_der_römischen_zahl(rest);
  }
  return + wert_der_ziffer(erst) + wert_der_römischen_zahl(rest);
}

