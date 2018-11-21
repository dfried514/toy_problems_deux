Array.prototype.isSubsetOf = function (arr) {
  const areEqualArrays = (a, b) => {
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
  const equals = (a, b) => {
    if (Array.isArray(a) && Array.isArray(b)) {
      return areEqualArrays(a, b);
    }
    if ((typeof a === 'string' && typeof b === 'string')
      || (typeof a === 'number' && typeof b === 'number')
      || (typeof a === 'boolean' && typeof b === 'boolean')
      || (typeof a === 'undefined' && typeof b === 'undefined'))
      {
        return a === b;
    }
    if (typeof a === 'object' && typeof b === 'object') {
      if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
      }
      let equality = true;

      for (let key in a) {
        equality = equality && equals(a[key], b[key]);
      }
      return equality;
    }
    return false;
  };
  for (let val of this) {
    if (arr.findIndex(elem => equals(elem, val)) < 0) {
      return false;
    }
  }
  return true;
};

let arr = [1,'hi',3,{a:4, b:{c:[4,5]}},[1,2], 6, 7];
let array = [1,{a:4, b:{c:[4,5]}},[1,2], 3, 'hi'];

console.log(array.isSubsetOf(arr)); //yields true
var a = ['commit', ['rebase', 'push'], {'name': 'David'}, 'fred'];
console.log(a.isSubsetOf(['fred', 'commit', {'name': 'David'}, ['rebase','push'], 'blame']));  // true
var b = ['merge','reset','reset'];
console.log(b.isSubsetOf(['reset','merge','add','commit'])); // true
var aa = ['commit','push']
console.log(aa.isSubsetOf(['commit','rebase','push','blame'])); // true
var bb = ['merge','reset','reset']
console.log(bb.isSubsetOf(['reset','merge','add','commit'])); // true
console.log(bb.isSubsetOf(['reset','merge','add','commit'])); // true
