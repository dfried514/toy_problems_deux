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

 // analysis: obviously involve a stack,
 // iterate over input, push all left parens onto stack,
 // as right parens are encountered, pop off left parens from stack,
 // compare, if they don't match return false
 // after iteration completes, stack should be empty if all parens match

const balancedParens = input => {
  const parensObj = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  const leftParens = ['(', '[', '{'];
  const rightParens = Object.keys(parensObj);
  let leftParensStack = [];
  let index = 0;

  while (index < input.length) {
    let curChar = input.charAt(index);
    if (leftParens.includes(curChar)) {
      leftParensStack.push(curChar);
    } else if (rightParens.includes(curChar)) {
      let lastLeftParen = leftParensStack.pop();
      if (parensObj[curChar] !== lastLeftParen) {
        return false;
      }
    }
    index++;
  }
  return leftParensStack.length === 0;
};

console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false

console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false
