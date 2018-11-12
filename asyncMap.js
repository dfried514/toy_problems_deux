const asyncMap = (tasks, callback) => {
  let results = [];
  let nextTaskIndex = 1;

  const cb = data => {
    results.push(data);
    let nextTask = tasks[nextTaskIndex++];
    if (nextTask) {
      nextTask(cb);
    } else {
      callback(results)
    }
  };
  tasks[0](cb);
};

const callback = arr => console.log('result', arr);

const tasks = [
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 2000);
  },
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 500);
  },
  function(cb){
    setTimeout(function(){
      cb('three');
    }, 1000);
  }
];

asyncMap(tasks, callback); // ['one', 'two', 'three']
