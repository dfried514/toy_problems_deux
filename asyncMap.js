const myFuncs = (funcs, callback) => {
  let arr = [];
  let next = 1;

  let cb = data => {
    arr.push(data);
    let nextFn = funcs[next++];
    if (nextFn) {
      nextFn(cb);
    } else {
      console.log('arr', arr);
    }
  };
  funcs[0](cb);
};

let funcs = [
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 2000);
  },
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 1000);
  }
];

myFuncs(funcs);

const add = (a, b) => a + b;

let add5 = b => add(5, b);
console.log(add5(4));
