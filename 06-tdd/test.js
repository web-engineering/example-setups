import assert from 'assert';
import { fizzbuzz, fuzzer } from './fizzbuzz.js';
import { diamond, listdoubler, stringdoubler, stringcreator } from './diamond.js';

describe('diamond', () => {
  it('stringcreator can create a one letter string ', () => {
    assert.equal(stringcreator('A',0,1), 'A');
  });
  it('stringcreator can position a letter in position 0 of three letter string: ..A ', () => {
    assert.equal(stringcreator('A',2,3), '..A');
  });   
  it('stringcreator can position a letter in position 1 of three letter string: .B. ', () => {
    assert.equal(stringcreator('B',1,3), '.B.');
  }); 
  it('stringcreator can position a letter in position 2 of three letter string: C.. ', () => {
    assert.equal(stringcreator('C',0,3), 'C..');
  });    


  it('stringdoubler can fill up a string, turn 123 into 12321', () => {
    assert.equal(stringdoubler("123"), "12321");
  });

  it('stringdoubler leaves a one element string unchanged ', () => {
    assert.equal(stringdoubler("A"), "A");
  });  

  it('listdoubler can fill up a list , turn [1,2,3] into [1,2,3,2,1]', () => {
    assert.deepEqual(listdoubler([1,2,3]), [1,2,3,2,1]);
  });

  it('listdoubler leaves a one element list unchanged ', () => {
    assert.deepEqual(listdoubler([1]), [1]);
  });

  
  
  it('can generate diamond for A', () => {
    assert.deepEqual(diamond('A'), ["A"]);
  });


  it('can generate diamond for B', () => {
    assert.deepEqual(diamond('B'), [
      ".A.", 
      "B.B", 
      ".A."
    ]);
  });  
  it('can generate diamond for C', () => {
    assert.deepEqual(diamond('C'), [
      "..A..", 
      ".B.B.", 
      "C...C",
      ".B.B.",
      "..A.."
    ]);
  });  

}); 


describe('fizzbuzz', () => {
  it('can generate first three numbers', () => {
    assert.deepEqual(fizzbuzz(3), [1,2,'Fizz']);
  });
  it('can generate first five numbers', () => {
    assert.deepEqual(fizzbuzz(5), [1,2,'Fizz', 4, 'Buzz']);
  });

  it('can generate first 15 numbers', () => {
    assert.deepEqual(fizzbuzz(15),[
      1,      2,      'Fizz',
      4,      'Buzz', 'Fizz',
      7,      8,      'Fizz',
      'Buzz', 11,     'Fizz',
      'Fizz', 14,     'FizzBuzz'
    ]);
  })

  it('can generate 100 numbers', () => {
    let result = fizzbuzz(100);
    assert.equal(result.length, 100);
  })  
});


describe('fuzzer', () => {
  it('can generate Fizz for number three', () => {
    assert.equal(fuzzer(3), 'Fizz');
  });
  it('can generate Buzz for number five ', () => {
    assert.equal(fuzzer(5), 'Buzz');
  });
  it('can generate FizzBuzz for number fifteen ', () => {
    assert.equal(fuzzer(15), 'FizzBuzz');
  });  

  it('can generate Fizz for number 23', () => {
    assert.equal(fuzzer(23), 'Fizz');
  });
  it('can generate Buzz for number 52 ', () => {
    assert.equal(fuzzer(52), 'Buzz');
  });   
  
  it('can generate FizzBuzz for number 35 ', () => {
    assert.equal(fuzzer(35), 'FizzBuzz');
  });  
  it('can generate FizzBuzz for number 53 ', () => {
    assert.equal(fuzzer(53), 'FizzBuzz');
  }); 

  it('can generate FizzBuzz for number 51 ( % 3 and includes 5 ) ', () => {
    assert.equal(fuzzer(51), 'FizzBuzz');
  });  

});
