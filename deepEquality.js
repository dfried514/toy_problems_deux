const deepEquals = (apple, orange) => {
  const equalArrays = (a, b) => {
    if (a.length !== b.length) {
      return false;
    }
    let index = 0;
    while (index < a.length) {
      if (a[index] !== b[index]) {
        return false;
      }
      index++;
    }
    return true;
  };

  let equality = true;

  const compareObjects = (a, b) => {
    for (let key in a) {
      if (!b.hasOwnProperty(key)) {
        equality = false;
      }
      if (Array.isArray(a[key])) {
        if (!Array.isArray(b[key])
          || !equalArrays(a[key], b[key])) {
          equality = false;
        }
      } else if (typeof a[key] === 'string'
        || typeof a[key] === 'number'
        || typeof a[key] === 'boolean') {
          if (!(a[key] === b[key])) {
            equality = false;
          }
        } else if (typeof a[key] === 'object') {
          compareObjects(a[key], b[key])
        }
    }
  };
  compareObjects(apple, orange);
  return equality;
};

console.log(deepEquals({a:[1,2,3], b: {c:3}},{a:[1,2,3], b: {c:3}})); // true
console.log(deepEquals({a:[1,2,3], b: {c:5}},{a:1, b: {c:6}})); // false
