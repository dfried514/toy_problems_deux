var meg = {
  name: 'Meg',
  speak: function() { console.log('My name is:', this.name); }
};

var tom = {
  name: 'Tom'
};


var bind = function(func, obj, ...args) {
   return func.bind(obj, ...args);
};

meg.speak();

meg.speak.bind(tom)();
bind(meg.speak, tom)();

/*
 * function bind():
 */

var alice = {
  name: 'alice',
  shout: function(){
    console.log(this.name);
    }
}
var boundShout = bind(alice.shout, alice);
boundShout(); // logs 'alice'
boundShout = bind(alice.shout, {name: 'bob'});
boundShout(); // logs 'bob'

var func = function(a, b){ return a + b };
var boundFunc = bind(func, null, 'foo');
var result = boundFunc('bar');
console.log(result === 'foobar'); // true
console.log(result);


Function.prototype.bind = function(obj, ...args) {
 //return (...rest) => this.call(obj, ...args, ...rest);
  var self = this;
  return function(...rest) {
    return self.call(obj, ...args, ...rest);
  };
};

var tim = {
  name: 'Tim',
  say: function(){
    console.log('Saying...', this.name);
    }
};

var boundSay = tim.say.bind(tim);
boundSay(); // logs 'Saying... Tim'
boundSay = tim.say.bind({name: 'rob'});
boundSay(); // log 'Saying... rob'


var func = function(a, b){ return a + b };
var boundFun = func.bind(null, 'foo');
var res = boundFun('bar');
console.log('res', res);
console.log(res === 'foobar'); // true


var jay = { name: 'Jay' };
//var sayTim = tim.say;
var saysWho = tim.say.bind(jay);
saysWho(); // 'Saying... Jay'


var joe = { name: 'Joe' };

function Foo() {
    this.name = 'Foo',
    joe.method = this.method; // joe === this
}

Foo.prototype.method = function() {
    console.log(this.name);
};

var foo = new Foo();
foo.method(); // 'Foo'
joe.method(); // 'Joe'

