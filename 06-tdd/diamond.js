function listdoubler(l){
  let len = l.length;
  for(let z = len-2; z>= 0; z--) {
    l.push( l[z] );
  }
  return l;
}

function stringdoubler(s){
  let len = s.length;
  for(let z = len-2; z>= 0; z--) {
    s += s[z];
  }
  return s;
}

function stringcreator(char, pos, max) {
  let whitespace = "............................................................";

  let post =  whitespace.substr(0, max - pos -1);
  let pre = whitespace.substr(0, pos);
  return pre + char + post;  
}

function diamond(letter) {
  const max = letter.charCodeAt(0) - 'A'.charCodeAt(0);
  let result = [];
  let l,s;
  for(let pos = 0;  pos <= max; pos++ ) {
    l = String.fromCharCode(65 + pos);
    s = stringcreator(l, max-pos, max+1);
    result.push(stringdoubler(s));
  }

  return listdoubler(result);
}

export { diamond, listdoubler, stringdoubler, stringcreator };