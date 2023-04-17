const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
  this.data = data;
  this.left = null;
  this.right = null;
  }
  }
  
  class BinarySearchTree {
  constructor() {
  this.rootNode = null;
  }
  
  root() {
  return this.rootNode;
  }
  
  add(data) {
  const newNode = new Node(data);
  if (this.rootNode === null) {
  this.rootNode = newNode;
  return;
  }
  let currentNode = this.rootNode;
  while (currentNode) {
  if (data < currentNode.data) {
  if (currentNode.left === null) {
  currentNode.left = newNode;
  break;
  } else {
  currentNode = currentNode.left;
  }
  } else if (data > currentNode.data) {
  if (currentNode.right === null) {
  currentNode.right = newNode;
  break;
  } else {
  currentNode = currentNode.right;
  }
  } else {
  break;
  }
  }
  }
  
  has(data) {
  let currentNode = this.rootNode;
  while (currentNode) {
  if (data === currentNode.data) {
  return true;
  } else if (data < currentNode.data) {
  currentNode = currentNode.left;
  } else if (data > currentNode.data) {
  currentNode = currentNode.right;
  }
  }
  return false;
  }
  
  find(data) {
  let currentNode = this.rootNode;
  while (currentNode) {
  if (data === currentNode.data) {
  return currentNode;
  } else if (data < currentNode.data) {
  currentNode = currentNode.left;
  } else if (data > currentNode.data) {
  currentNode = currentNode.right;
  }
  }
  return null;
  }
  
  remove(data) {
  let parentNode = null;
  let currentNode = this.rootNode;
  while (currentNode && currentNode.data !== data) {
  parentNode = currentNode;
  if (data < currentNode.data) {
  currentNode = currentNode.left;
  } else if (data > currentNode.data) {
  currentNode = currentNode.right;
  }
  }
  if (currentNode === null) {
  return;
  }
  if (currentNode.left === null && currentNode.right === null) {
  if (currentNode !== this.rootNode) {
  if (parentNode.left === currentNode) {
  parentNode.left = null;
  } else if (parentNode.right === currentNode) {
  parentNode.right = null;
  }
  } else {
  this.rootNode = null;
  }
  } else if (currentNode.left && currentNode.right) {
  let minNode = currentNode.right;
  while (minNode.left) {
  minNode = minNode.left;
  }
  const temp = minNode.data;
  this.remove(minNode.data);
  currentNode.data = temp;
  } else {
  let childNode = null;
  if (currentNode.left !== null) {
  childNode = currentNode.left;
  } else if (currentNode.right !== null) {
  childNode = currentNode.right;
  }
  if (parentNode !== null) {
  if (parentNode.left === currentNode) {
  parentNode.left = childNode;
  } else if (parentNode.right === currentNode) {
  parentNode.right = childNode;
  }
  } else {
  this.rootNode = childNode;
  }
  }
  }
  
  min() {
  if (this.rootNode === null) {
  return null;
  }
  let currentNode = this.rootNode;
  while (currentNode.left !== null) {
  currentNode = currentNode.left;
  }
  return currentNode.data;
  }
  
  max() {
  if (this.rootNode === null) {
  return null;
  }
  let currentNode = this.rootNode;
  while (currentNode.right !== null) {
  currentNode = currentNode.right;
  }
  return currentNode.data;
  }
  }

module.exports = {
  BinarySearchTree
};