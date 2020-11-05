import assert from 'assert';
import { fizzbuzz } from './fizzbuzz.js';
import { diamond } from './diamond.js';

describe('diamond', () => {
  it('can generate diamond for A', () => {
    assert.deepStrictEqual(diamond('A'), ["A"]);
  });

  /*
  it('can generate diamond for B', () => {
    assert.deepStrictEqual(diamond('B'), [
      ".A.", 
      "B.B", 
      ".A."
    ]);
  });  
  it('can generate diamond for C', () => {
    assert.deepStrictEqual(diamond('C'), [
      "..A..", 
      ".B.B.", 
      "C...C",
      ".B.B.",
      "..A.."
    ]);
  });  
  */
}); 


describe('fizzbuzz', () => {
  it('can generate first number', () => {
    assert.deepStrictEqual(fizzbuzz(1), [1]);
  });

  /*  
  it('can generate first three numbers', () => {
    assert.deepStrictEqual(fizzbuzz(3), [1,2,'Fizz']);
  });

  it('can generate first five numbers', () => {
    assert.deepStrictEqual(fizzbuzz(5), [1,2,'Fizz', 4, 'Buzz']);
  });

  it('can generate first 15 numbers', () => {
    assert.deepStrictEqual(fizzbuzz(15),[
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
  });
  */
});