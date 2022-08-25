const Graph = require('./Graph')
const Node = require('./Node')

let g = new Graph();

//define all the nodes
g.addNode(1, new Node(101))
g.addNode(2, new Node(102))
g.addNode(3, new Node(103))
g.addNode(4, new Node(104))
g.addNode(5, new Node(105))

//define the edges
g.addEdge(1,2);
g.addEdge(1,3);
g.addEdge(3,4);
g.addEdge(4,5);

//demonstrates OOP principle of encapsulation (the check)

