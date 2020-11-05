function fuzzer(i) {
  let s = `${i}`;

  if (i % 15 === 0) {
    return "FizzBuzz";
  } else if ( s.includes('3') && s.includes('5') ) {
    return "FizzBuzz";    
  } else if ( s.includes('5') && i % 3 === 0 ) {
    return "FizzBuzz";       
  } else if (i % 5 === 0) {
    return 'Buzz';
  } else if (i % 3 === 0) {
    return 'Fizz';
  } else if ( s.includes('3')) {
    return "Fizz";
  } else if ( s.includes('5')) {
    return "Buzz";
  }  else {
    return i;
  }    
}

function fizzbuzz(n){
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(fuzzer(i));
  }
  return result;
}

export { fizzbuzz, fuzzer }
