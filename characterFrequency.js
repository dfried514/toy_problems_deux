/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
*/
// analysis:
// iteration problem, build data structure as we go...
// sort twice at the end

const characterFrequency = input => {
  const frequencySortDec = (a, b) => a[1] < b[1];
  const characterSortAsc = (a, b) => a[0] > b[0];
  let charArray = [];

  for (let i = 0; i < input.length; i++) {
    let charIndex = charArray.findIndex(elem => elem[0] === input[i]);
    if (charIndex < 0) {
      charArray.push([input[i], 1]);
    } else {
      let charCount = charArray[charIndex][1] + 1;
      charArray[charIndex] = [input[i], charCount];
    }
  }
  return charArray.sort(characterSortAsc).sort(frequencySortDec);
};

console.log(characterFrequency('mississippi'));
//  *  [
//  *    ['i', 4],
//  *    ['s', 4],
//  *    ['p', 2],
//  *    ['m', 1]
//  *  ]
console.log(characterFrequency('miaaiaaippi'));
//  *  [
//  *    ['a', 4],
//  *    ['i', 4],
//  *    ['p', 2],
//  *    ['m', 1]
//  *  ]
//  *
//  *       :: Example3 ::
//  *
console.log(characterFrequency('mmmaaaiiibbb'));
//  *  [
//  *    ['a', 3],
//  *    ['b', 3],
//  *    ['i', 3],
//  *    ['m', 3]
//  *  ]
//  *
