var Tree = function(name) {
  this.name = name;
  this. children = [];
};

Tree.prototype.isDescendant = function(child) {
  let isFound = false;

  const search = function(tree) {
    if (tree === child) {
      isFound = true;
      return;
    }
    for (let curChild of tree.children) {
      search(curChild);
    }
  }
  search(this);
  return isFound;
};

Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree.');
  }
  return this;
};

Tree.prototype.removeChild = function(child) {
  let childIndex = this.children.indexOf(child);

  if (childIndex >= 0) {
    this.children.splice(childIndex, 1);
  } else {
    throw new Error('That child is not a child of this tree.');
  }
}

Tree.prototype.getAncestorPath = function(child) {
  let path = null;

  const findPath = function(tree, searchPath) {
    searchPath.push(tree.name);
    if (tree === child) {
      path = searchPath;
      return;
    }
    for (let curChild of tree.children) {
      findPath(curChild, searchPath.slice());
    }
  }
  findPath(this, []);
  return path;
}

Tree.prototype.getCommonAncestor = function(child1, child2) {
  let path1 = this.getAncestorPath(child1);
  let path2 = this.getAncestorPath(child2);

  if (path1 === null || path2 === null) {
    return null;
  }

  let index1 = path1.length - 1;

  while (index1 >= 0) {
    let ancestor = path1[index1];
    if (path2.includes(ancestor)) {
      return ancestor;
    }
    index1--;
  }
  return null;
}

  var grandma = new Tree('grandma');
  var stepMom = new Tree('stepMom');
  var mom = new Tree('mom');
  var dad = new Tree('dad');
  var sue = new Tree('sue');
  var jim = new Tree('jim');
  var bob = new Tree('bob');
  var dan = new Tree('dan');
  mom.addChild(bob);
  stepMom.addChild(sue);
  dad.addChild(jim);
  grandma.addChild(stepMom);
  grandma.addChild(mom);
  grandma.addChild(dad);
  var me = new Tree('me');
  mom.addChild(me);
  console.log(grandma.getAncestorPath(me)); // => [grandma, mom, me]
  console.log(grandma.getCommonAncestor(me, dan));
