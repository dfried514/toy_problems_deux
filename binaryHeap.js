function BinaryHeap () {
  this._heap = [];
  this._comparator = (x, y) => x < y;
  // this compare function will result in a minHeap, use it to make comparisons between nodes in your solution
  this._compare = (i, j, comparator = this._comparator) => comparator(i, j);
}

// This function works just fine and shouldn't be modified
BinaryHeap.prototype.getRoot = function() {
  return this._heap[0];
}

BinaryHeap.prototype.getParent = function(index) {
  return Math.floor((index - 1) / 2);
}

BinaryHeap.prototype.getChildren = parent => [(parent * 2) + 1, (parent * 2) + 2];

BinaryHeap.prototype.insert = function(value) {
  this._heap.push(value);

  let child = this._heap.length - 1;
  let parent = this.getParent(child);

  console.log(parent, child);
  console.log(this._compare(this._heap[parent], this._heap[child]));

  while (parent >= 0
    && !this._compare(this._heap[parent], this._heap[child])) {
      [this._heap[parent], this._heap[child]]
        = [this._heap[child], this._heap[parent]];

      child = parent;
      parent = this.getParent(child);
  }
}

BinaryHeap.prototype.removeRoot = () => {
}

var heap = new BinaryHeap();
heap.insert(10);
heap.insert(20);
heap.insert(30);
heap.insert(40);
heap.insert(50);
heap.insert(60);
console.log(heap);
heap.insert(5);
console.log(heap);
console.log(heap.getRoot());
