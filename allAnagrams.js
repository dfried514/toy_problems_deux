/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

 // analysis:
 // Classic decision tree problem, solved using recursion
 // Start with an empty string, at each step of recursion add a unique char
 // from initial list, in sequence
 // Finish the string and add to result array when length equals
 // length of initial string

 const allAnagrams = string => {
  const anagramList = [];

  const createAnagrams = (anagram, charList) => {
    if (anagram.length === string.length) {
      anagramList.push(anagram);
      return;
    }
    // iterate over char list
    // create clone of partial anagram
    // add unique char to partial anagram
    // and remove char from charList
    // pass back to recursive fn to continue to next char
    for (let char of charList) {
      let anagramClone = anagram.slice();
        anagramClone += char;
        createAnagrams(anagramClone, charList.replace(char, ''));
    }
  }
  createAnagrams('', string);
  return anagramList;
 }

 const anagrams = allAnagrams('abc');
 console.log(anagrams);
