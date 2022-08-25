class Node {
    //assume neighbours will be an array of nodes
    constructor (value, neighbours=[]){
        this.value = value;
        this.neighbours = neighbours; //possible to have more than one next
    }

    addNeighbour(node, label=""){
        this.neighbours.push({
            node,label
        })
    }

    getNeighbours(){
        return this.neighbours
    }
}
module.exports = Node;