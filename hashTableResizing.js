var HashTable = function(size) {
  this.size = size;
  this.maxThreshold = 0.75;
  this.minThreshold = 0.25;
  this.numElements = 0;
  this.storage = [];
}

HashTable.prototype.getIndexBelowMaxForKey
  = function(str) {
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
        hash = (hash << 5) + hash + str.charCodeAt(i);
        hash = hash & hash; // Convert to 32bit integer
        hash = Math.abs(hash);
      }
      return hash % this.size;
};

HashTable.prototype.resize = function(threshold) {
  const resizeMultiplyer
    = threshold === this.maxThreshold
      ? 2
      : 0.5;
  this.size *= resizeMultiplyer;
  this.numElements = 0;
  let oldStorage = this.storage;
  this.storage = [];

  oldStorage.forEach(bucket => {
    bucket.forEach(keyVal => {
      this.insert(keyVal[0], keyVal[1]);
    });
  });
};

HashTable.prototype.insert = function(key, val) {
  const hashCode = this.getIndexBelowMaxForKey(key);
  let bucket = this.storage[hashCode] || [];
  let keyValIndex = bucket.findIndex(keyVal =>
    keyVal[0] === key);
  if (keyValIndex >= 0) {
    bucket[keyValIndex][1] = val;
  } else {
    bucket.push([key, val]);
    this.storage[hashCode] = bucket;
    this.numElements++;
    if ((this.numElements / this.size) > this.maxThreshold) {
      this.resize(this.maxThreshold);
    }
  }
};

HashTable.prototype.retrieve = function(key) {
  const hashCode = this.getIndexBelowMaxForKey(key);
  let bucket = this.storage[hashCode];
  if (bucket) {
    let keyVal = bucket.find(keyVal =>
      keyVal[0] === key);
    if (keyVal) {
      return keyVal[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(key) {
  const hashCode = this.getIndexBelowMaxForKey(key);
  let bucket = this.storage[hashCode];
  if (bucket) {
    let keyValIndex = bucket.findIndex(keyVal =>
      keyVal[0] === key);
    if (keyValIndex >= 0) {
      bucket.splice(keyValIndex, 1);
      this.numElements--;
      if ((this.numElements / this.size) < this.minThreshold) {
        this.resize(this.minThreshold);
      }
    }
  }
};

let hashtable = new HashTable(4);

console.log(hashtable.getIndexBelowMaxForKey('Ta'));
console.log(hashtable.getIndexBelowMaxForKey('sad'));
console.log('init size', hashtable.size);
hashtable.insert('happy', 'gold');
hashtable.remove('happy');
hashtable.remove('happy');
console.log('empty, size reduced', hashtable.size);
console.log('empty hashtable', hashtable.storage);
hashtable.insert('Ta', 'silver');
console.log(hashtable.storage);
hashtable.insert('Ta', 'gold');
console.log(hashtable.storage);
console.log('one key', hashtable.size);
console.log(hashtable.retrieve('sad'));
hashtable.insert('grumpy', 'bronze');
console.log(hashtable.storage);
console.log('size doubled', hashtable.size);
console.log(hashtable.getIndexBelowMaxForKey('Ta'));
console.log(hashtable.getIndexBelowMaxForKey('sad'));
console.log(hashtable.getIndexBelowMaxForKey('grumpy'));
console.log(hashtable.getIndexBelowMaxForKey('happy'));
hashtable.remove('grumpy');
console.log(hashtable.storage);
hashtable.remove('Ta');
console.log('size reduced', hashtable.size);
console.log(hashtable.storage)
