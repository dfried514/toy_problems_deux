var Node = function(value) {
  this.value = value;
  this.next = null;
};

var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value) {
  let tmpNode = new Node(value);
  if (this.head === null) {
    this.head = tmpNode;
  }
  if (this.tail === null) {
    this.tail = tmpNode;
  } else {
    this.tail.next = tmpNode;
    this.tail = tmpNode;
  }
};

LinkedList.prototype.removeHead = function() {
  if (this.head === null) {
    return null;
  }
  let value = this.head.value;
  this.head = this.head.next;
  if (this.head === null) {
    this.tail = null;
  }
  return value;
};

LinkedList.prototype.contains = function(value) {
  let ptr = this.head;

  while (ptr) {
    if (ptr.value === value) {
      return true;
    }
    ptr = ptr.next;
  }
  return false;
};

LinkedList.prototype.display = function() {
  let ptr = this.head;
  let values = [];

  while (ptr) {
    values.push(ptr.value);
    ptr = ptr.next;
  }
  if (values.length > 0) {
    console.log(values.join(' -> '));
  } else {
    console.log(null);
  }
};


var list = new LinkedList();
console.log(list.head)/         //yields 'null'
console.log(list.tail);         //yields 'null'
list.display();                 //yields 'null'
list.addToTail(4);
list.addToTail(5);
list.addToTail(6);
list.addToTail(7);
list.display(); //yields '4 -> 5 -> 6 -> 7'
console.log(list.head.value);   //yields '4';
console.log(list.contains(5));  //yields 'true';
console.log(list.contains(8));  //yields 'false';
console.log(list.removeHead()); //yields '4';
list.display(); //yields '5 -> 6 -> 7'
console.log(list.tail.value);   //yields '7';
console.log(list.removeHead()); //yields '5';
list.display(); //yields '6 -> 7'
console.log(list.removeHead()); //yields '6';
list.display(); //yields '7'
console.log(list.removeHead()); //yields '7';
list.display(); //yields 'null'
console.log(list.head); //yields 'null'
console.log(list.tail); //yields 'null'
