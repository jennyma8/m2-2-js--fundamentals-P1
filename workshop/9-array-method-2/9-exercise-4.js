/**
 * NOTE: For the exercises in this section, you are not allowed to use the
 * `for` or `while` loops.
 *
 * You must solve them using array methods like filter, map, forEach, etc.
 *
 * You will also need to verify that your functions work as expected.
 * Be sure to test them. :)
 */

// Q4
// Write a function that accepts a list of numbers and returns a new list with
// all of the even numbers removed.

//Your goal is to add some stuff inside removeEvens, so that when you run this file with Node, it logs out the right value ([1, 3, 5, 7, 9, 11]). 
//You're allowed to do whatever you want inside the body of that function, except you can't use for or while, you need to use forEach / map / filter / find / every
//the methods we saw today

function removeEvens(values) {
  return values.filter(function (num) {
    return num % 2 !== 0;
  })
}


console.log(
  'Q4 removeEvens()',
  removeEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
);
// should log [1, 3, 5, 7, 9, 11]

