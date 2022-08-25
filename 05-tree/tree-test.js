const {BinaryTree, BinaryTreeNode} = require('./Tree');

// const n1 = new BinaryTreeNode(25);
// const n2 = new BinaryTreeNode(15);
// const n3 = new BinaryTreeNode(7);
// const n4 = new BinaryTreeNode(20);
// const n5 = new BinaryTreeNode(91);
// const n6 = new BinaryTreeNode(71);



// n1.left = n2;
// n2.left = n3;
// n2.right = n4;
// n1.right = n5;
// n5.left = n6;


const tree = new BinaryTree()

tree.add(25)
tree.add(15)
tree.add(7)
tree.add(20)
tree.add(91)
tree.add(71)

console.log('searching for 7... ', tree.find(7))
console.log('searching for 722... ', tree.find(722))
console.log("sum of tree: ", tree.sum())