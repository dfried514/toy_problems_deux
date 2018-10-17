/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Introduce i into the global scope so we can test function efficiency
var i;

// Feel free to add helper functions if needed.


const bubbleSort = array => {
  let isSorted = false;
  let endIndex = array.length - 1;
  i = 0;
  while (!isSorted) {
    isSorted = true;
    for (let j = 0; j < endIndex; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isSorted = false;
      }
      i++;
    }
   endIndex--;
  }
  console.log('i', i);  // O(n^2) is cut in half
  return array;
};

console.log(bubbleSort([2, 1, 3])); // [1, 2, 3]
console.log(bubbleSort([9, 7, 5, 3])); // [3, 5, 7, 9] O(n^2), unsorted
console.log(bubbleSort([2, 4, 6, 8])); // [2, 4, 6, 8] O(n), pre-sorted
console.log(bubbleSort([2])); // [2]
