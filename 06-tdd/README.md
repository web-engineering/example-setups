## 2 Katas for TDD: FizzBuzz and Diamond

This is plain JavaScript (no Babel),
we are using node modules and require, see [nodejs.org](https://nodejs.org/api/modules.html)

### installatoin

Run

    npm install

to install the testing library mocha.

### Running the program

Run

    npm run start

to run index.js with node.

### Testing the program

There are some test cases in test.js to get you started.
to install mocha, and then run

    npm run test

to run the tests.

Now you can develop the rest of the fizzbuzz.js and the diamond.js package.

## First Task: FizzBuzz

Write a program that prints or returns the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

Sample-Output: 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,...

Advanced Level: Also test if the number contains the digit 3 or 5 or both, apply the same rules.

## Second Task: Diamond

Given a letter print / return a diamond starting with 'A' with the supplied letter at the widest point.

Diamond for 'C':

        ..A..
        .B.B.
        C...C
        .B.B.
        ..A..

Diamond for 'A' is just one line:

        A
