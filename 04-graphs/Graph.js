class Graph{
    constructor(){
        //use an object to store the nodes via a lookup table
        // use id of node to get the node itself
        this.nodes = {}
    }

    addNode(id, Node){
        this.nodes[id] = node;
    }

    addEdge(startNodeId, endNodeId){
        const startNode = this.nodes[startNodeId];
        const endNode = this.nodes[endNodeId];

        //make sure start and end are not already connected by an edge
        if(startNode.getNeighhours().map(n=>n.node).includes(endNode)){
            return;
        }
        if(endNode.getNeighhours().map(n=>n.node).includes(startNode)){
            return;
        }

        if(startNode && endNode){
            startNode.addNeighbour(endNode);
            endNode.addNeighbour(startNode);
        }
    }
}

module.exports = Graph