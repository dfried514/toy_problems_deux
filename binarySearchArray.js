/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */
// analysis: check midpoint and pivot either left or right
// depending on target, until mid === start index
// or mid === end index and target is not found....

const binarySearch = (array, target) => {
  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }
  let startIndex = 0;
  let endIndex = array.length - 1;
  let midIndex = Math.floor(endIndex / 2);

  while (true) {
    if (target === array[midIndex]) {
      return midIndex;
    }
    if (target < array[midIndex]) {
      if (startIndex === midIndex) {
        return null;
      }
      let newEndIndex = midIndex;
      midIndex = Math.floor((endIndex + startIndex) / 2);
      endIndex = newEndIndex;
    } else {
      if (endIndex === midIndex) {
        return null;
      }
      let newStartIndex = midIndex;
      midIndex = Math.ceil((endIndex + startIndex) / 2);
      startIndex = newStartIndex;
    }
  }
};

 var index1 = binarySearch([1, 2, 3, 4, 5], 4);
 console.log(index1); // 3
 var index2 = binarySearch([1, 2, 3, 4, 5], 8);
 console.log(index2); // null
 var index3 = binarySearch('happy', 1);
 console.log(index3); // null
