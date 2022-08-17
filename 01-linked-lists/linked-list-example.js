const Node = require('./Node')
const LinkedList = require('./LinkedList')

let numberList = new LinkedList();

numberList.push(new Node(101));
numberList.push(new Node(102));
numberList.push(new Node(103));
numberList.push(new Node(104));
numberList.print()

console.log("insert a -99 at index 1");
numberList.insertAt(1, new Node(-99));
numberList.print();

console.log("delete index 2");
numberList.deleteAt(2);
numberList.print();

