class Node {
  left;

  right;

  data;

  constructor(data, left, right) {
    this.left = left;
    this.right = right;
    this.data = data;
  }
}

function insert(root, data) {
  const left = new Node();
  const right = new Node();
  if (!root.left) root.left = left;
  if (!root.right) root.right = right;
  if (root.data === undefined) {
    root.data = data;
  } else {
    if (root.data > data) {
      insert(root.left, data);
    } else {
      insert(root.right, data);
    }
  }
}

function inOrderTraverse(root, traversedData) {
  if (!root) return;
  inOrderTraverse(root.left, traversedData);
  if (root.data) traversedData.push(root.data);
  inOrderTraverse(root.right, traversedData);
}

function sort(items) {
  const treeNode = new Node();
  const sorted = [];
  items.forEach((item) => insert(treeNode, item)); // array to bst
  inOrderTraverse(treeNode, sorted);
  return sorted;
}

module.exports = {
  insert,
  inOrderTraverse,
  sort,
};
