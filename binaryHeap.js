const minComparator = (x, y) => x < y;
const maxComparator = (x, y) => x > y;

function BinaryHeap () {
  this._heap = [];
  this._comparator = minComparator;
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

  while (parent >= 0
    && this._compare(this._heap[child], this._heap[parent])) {
      [this._heap[parent], this._heap[child]]
        = [this._heap[child], this._heap[parent]];

      child = parent;
      parent = this.getParent(child);
  }
}

BinaryHeap.prototype.removeRoot = function() {
  if (this._heap.length === 0) {
    return null;
  }
  if (this._heap.length === 1) {
    return this._heap.pop();
  }
  const max = (a, b) =>
    this._compare(this._heap[a], this._heap[b])
      ? a
      : b;

  [this._heap[0], this._heap[this._heap.length - 1]]
    = [this._heap[this._heap.length - 1], this._heap[0]];

  const root = this._heap.pop();

  let parent = 0;
  let maxChild = max(...this.getChildren(parent));

  while (this._heap[maxChild] &&
    this._compare(this._heap[maxChild], this._heap[parent])) {

      [this._heap[parent], this._heap[maxChild]]
        = [this._heap[maxChild], this._heap[parent]];

      parent = maxChild;
      maxChild = max(...this.getChildren(parent));
  }
  return root;
}

var heap = new BinaryHeap();
heap.insert(60);
heap.insert(50);
heap.insert(40);
heap.insert(30);
heap.insert(20);
heap.insert(10);
heap.insert(5);
console.log(heap._heap); // [5, 30, 10, 60, 40, 50, 20]
console.log(heap.removeRoot()); // 5
console.log(heap._heap); // [10, 30, 20, 60, 40, 50]
