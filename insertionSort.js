const insertionSort = (arr, comparator) => {
  const shiftLastToFirst = (first, last) => {
    let tmp = arr[last];

    for (let i = last - 1; i >= first; i--) {
      [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
    }
    arr[first] = tmp;
  };
  for (let i = 1; i < arr.length; i++) {
    let index = 0;

    while (comparator(arr[index], arr[i]) <= 0
      && index < i) {
        index++;
    }
    if (index < i) {
      shiftLastToFirst(index, i);
    }
  }
  return arr;
};

let comparator = (a, b) => a.value - b.value;
let arr = [
  {value: 10},
  {value: 5, order: 1},
  {value: 5, order: 2}
];
console.log(arr);
console.log(insertionSort(arr, comparator));
//[{value: 5, order: 1}, {value:5, order: 2}, {value: 10}]
