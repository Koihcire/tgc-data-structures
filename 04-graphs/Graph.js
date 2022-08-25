const Queue = require('./dataStructures/Queue')
const Stack = require('./dataStructures/Stack')

class Graph{
    constructor(){
        //use an object to store the nodes via a lookup table
        // use id of node to get the node itself
        this.nodes = {}
    }

    addNode(id, Node){
        this.nodes[id] = Node;
    }

    addEdge(startNodeId, endNodeId){
        const startNode = this.nodes[startNodeId];
        const endNode = this.nodes[endNodeId];

        //make sure start and end are not already connected by an edge
        if(startNode.getNeighbours().map(n=>n.node).includes(endNode)){
            return;
        }
        if(endNode.getNeighbours().map(n=>n.node).includes(startNode)){
            return;
        }

        if(startNode && endNode){
            startNode.addNeighbour(endNode);
            endNode.addNeighbour(startNode);
        }
    }

    bfs (startNodeID){
        const startNode = this.nodes[startNodeID];
        const visited = []; //store all the visited nodes
        const queue = new Queue();
        queue.enqueue(startNode)
        // while there is still nodes in the q
        while(queue.peek()){
            const front = queue.dequeue();
            if (visited.includes(front) == false){
                //proceed to visit
                console.log("Visiting Node " + front.value)

                //put all neighbours into the q
                const neighbourNodes = front.getNeighbours().map(n=>n.node);
                for (let n of neighbourNodes){
                    queue.enqueue(n);
                }

                //mark the current node as visited
                visited.push(front);
            }
        }
    }

    dfs (startNodeID){
        const startNode = this.nodes[startNodeID];
        const visited = []; //store all the visited nodes
        const stack = new Stack();
        stack.push(startNode)
        // while there is still nodes in the q
        while(stack.peek()){
            const front = stack.pop();
            if (visited.includes(front) == false){
                //proceed to visit
                console.log("Visiting Node " + front.value)

                //put all neighbours into the q
                const neighbourNodes = front.getNeighbours().map(n=>n.node);
                for (let n of neighbourNodes){
                    stack.push(n);
                }
                //mark the current node as visited
                visited.push(front);
            }
        }
    }
}

module.exports = Graph