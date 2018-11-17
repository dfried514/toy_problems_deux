var HashTable = function(size) {
  this.size = size;
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
    }
  }
};

let hashtable = new HashTable(6);

console.log(hashtable.getIndexBelowMaxForKey('happy'));
console.log(hashtable.getIndexBelowMaxForKey('sad'));
hashtable.insert('happy', 'gold');
console.log(hashtable.storage);
hashtable.insert('happy', 'silver');
console.log(hashtable.storage);
hashtable.insert('sax', 'silver');
console.log(hashtable.storage);
console.log(hashtable.retrieve('sax'));
hashtable.remove('sad');
console.log(hashtable.storage);
hashtable.remove('sax');
console.log(hashtable.storage);
