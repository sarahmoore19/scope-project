/***********************************************************************
  Currying is the process of decomposing a function that takes multiple arguments
into one that takes single arguments successively until it has the sufficient
number of arguments to run.
  Write a `curriedSum` function that takes an integer(how many numbers to sum)
and returns a function that can be successively called with single arguments
until it finally returns a sum.
  Here is a breakdown of how curriedSum(numArgs) should work:
    - Define an empty array, `numbers`.
    - Define a function, `_curriedSum` that:
        - Closes over `numArgs` and `numbers`.
        - Takes a single postive integer greater than 0 as an argument.
          - If number is less than or equal to 0 return null
        - Appends this to the `numbers` array each time.
        - If `numbers.length === numArgs`, it sums the numbers in the array and
        returns the result.
        - Else, it returns itself.
    - Returns `_curriedSum`.
If you're confused, think of it this way: `_curriedSum` keeps collecting
arguments and returning itself until it has enough arguments, at which point it
actually does the required work of summing.
***********************************************************************/

let curriedSum = numArgs => {
  if (numArgs <= 0) return null;
  let numbers = [];
  let curriedSum2 = num => {
    if (numbers.length < numArgs) numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((accum, num) => {
        return accum + num;
      })
    }
    else return curriedSum2;
  }
  return curriedSum2;
}



// 2

// this function can also be invoked like this:
//const sum = curriedSum(3)(2)(1)(7); // => returns 10

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = curriedSum;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
