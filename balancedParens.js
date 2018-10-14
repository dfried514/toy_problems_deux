/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

 // analysis: classic divide and conquor problem
  // strategy:  start iterating over input from leftStart
  // if a right paren is found, set balanced to false and return
  // if a left paren is found, identify its matching right paren, and
  // start from the rightEnd going backwards to find the matching right paren
  // if not found, set balanced to false and return,
  // if found, reset right margin to found matching paren index - 1, start a
  // new search at matching paren index + 1, and resume current search until
  // right margin is reached
const balancedParens = input => {
  let balanced = true;

  const findBalancedParens = (startIndex, endIndex) => {
    const parensObj = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
    const rightParens = [')', ']', '}'];

    const matchingRightParenIndex = (startIndex, endIndex, rightParen) => {
      let rightParenIndex = -1;
      let index = endIndex;

      while (rightParenIndex < 0 && index > startIndex) {
        console.log('matching', index, input.charAt(index), rightParen);
        if (input.charAt(index) === rightParen) {
          rightParenIndex = index;
        }
        index--;
      }
      return rightParenIndex;
    };

    let index = startIndex;

    while (balanced && index <= endIndex) {
      let curChar = input.charAt(index);
      if (rightParens.includes(curChar) && index !== endIndex) {
        balanced = false;
      }
      if (parensObj.hasOwnProperty(curChar)) {
        newEndIndex = matchingRightParenIndex(index, endIndex, parensObj[curChar]);
        console.log('newEndIndex', newEndIndex);
        if (newEndIndex < 0) {
          balanced = false;
        } else {
          findBalancedParens(newEndIndex + 1, endIndex);
          endIndex = newEndIndex;
          index++;
        }
      }
    }
  };
  findBalancedParens(0, input.length - 1);
  return balanced;
};

console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
// console.log(balancedParens(')('));  // false
// console.log(balancedParens('(())'));  // true®®

// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]'));   // true
// console.log(balancedParens('[(]{)}')); // false

// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false
