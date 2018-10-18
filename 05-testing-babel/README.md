## Example setup for babel and mocha

We are developing a package for converting roman numerals (stings)
into javascript Numbers. We are writing modern javascript and using
babel to convert it back to ES5.  You can find some code already in src/roman.js.

NOTE: we are using ES6 modules and import, see [MDN](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/import)

To use this package you import it as shown in src/index.js.  

But first you need to 

    npm install

and then run

    npm run build

every time you change code in src.
to run the main program index.js use

   npm run start

To test the package there are some test cases in test/roman.js. first run

   npm run test

to run the tests.

Now you can develop the rest of the roman.js package.
