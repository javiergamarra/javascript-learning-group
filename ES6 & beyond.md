# ES6 & Beyond

[Book](https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20%26%20beyond)

## Chapter 1 - ES? Now & Future

* ES5 is the "current" version in all major browsers (specially IE).
* ES6, now ES2015, is the newer spec.
* Because the support for ES6 is spotty in some browsers (cough, cough), we have to depend on transpilers
	* Basically *translate* from ES6 to ES5 in a new tooling step.
* But we can use polyfills/shims, basically added features (like new functions in ES6) that don't require syntactic changes and can added in older JS versions.

## Chapter 2 - Syntax

### Katas:

* [Remove duplicates](https://www.codewars.com/kata/train-to-remove-duplicates-from-an-array-with-filter)
* [Simple sequence](https://www.codewars.com/kata/simple-sequence-validator)
* [Numbers in order](https://www.codewars.com/kata/are-the-numbers-in-order)
* [Take or leave it](https://www.codewars.com/kata/take-it-or-leave-it-interview-strategy)

* *let* instead of *var*, with block scoping!
* Temporal Dead Zone (TDZ), the place variables occupy when they are not initialized
* *let* in a for loop creates a variable for each iteration of the loop (so closures works as expected)
* *const* are constant (references!)
* Block scoping works! (yay!)
* *...* operator, called *spread* to transform an array to parameters or *rest* to transform parameters to an array.
* *spread* behaves like *apply* with arrays or *concat*
* *rest* behaves like *arguments*
* Default parameters, like:

	```javascript
		function foo(x = 11) {
		
		}
	
	```
* Default parameters can be expressions (functions) or references to other previous parameter