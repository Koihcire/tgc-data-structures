const Node = require('./Node')

let  n1 = new Node(101);
let  n2 = new Node(102);
let  n3 = new Node(103);
let  n4 = new Node(104);
let  n5 = new Node(105);

n1.addNeighbour(n2);
n2.addNeighbour(n1);

n2.addNeighbour(n3);
n2.addNeighbour(n4);

n3.addNeighbour(n2);

n4.addNeighbour(n2);

n4.addNeighbour(n5);
n5.addNeighbour(n4);