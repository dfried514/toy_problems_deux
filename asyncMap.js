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

const callback = arr => console.log('result', arr);

const asyncMapCallbacks = (tasks, callback) => {
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

asyncMapCallbacks(tasks, callback); // ['one', 'two', 'three']

//////////////

const asyncMapPromises = (tasks, callback) => {

  const createPromise = index => new Promise((resolve, reject) =>
    tasks[index](resolve));

  let promiseArray = [];

  for (let i = 0; i < tasks.length; i++) {
    promiseArray.push(createPromise(i));
  }

  Promise.all(promiseArray).then(callback);
};

asyncMapPromises(tasks, callback); // ['one', 'two', 'three']
