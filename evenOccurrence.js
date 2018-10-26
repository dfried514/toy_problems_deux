const evenOccurrence = arr => {
  let hash = [];

  for (let i = 0; i < arr.length; i++) {
    let curVal = arr[i];
    let hashIndex = hash.findIndex(val => val[0] === curVal);
    if (hashIndex < 0) {
      hash.push([curVal, 1]);
    } else {
      let hashVal = hash[hashIndex][1];
      hash[hashIndex] = [curVal, hashVal + 1];
    }
  }

  let firstEven = hash.find(val => val[1] % 2 === 0);
  return firstEven === undefined ? null : firstEven[0];
};

var onlyEven = evenOccurrence([2, 1, 4, 6, 3, 2, 2, 5, 3, 3]);
 console.log(onlyEven); //  null
