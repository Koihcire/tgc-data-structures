// a node needs to have 
//1. data that its suppose to store
//2. a reference (pointer) to its neighbour

class Node{
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
    // interface of the class is how other code can make use of the class (functionality)
    setValue(value){
        this.value = value;
    }
    getValue(){
        return this.value;
    }
    getNext(){
        return this.next;
    }
    //the 'next' argument is supposed to be another node or null
    setNext(next){
        this.next = next
    }
}

module.exports = Node;