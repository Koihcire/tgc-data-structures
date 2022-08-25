const Node = require('./Node');
const LinkedList = require('./LinkedList')

class Stack{
    constructor(){
        this.data = new LinkedList();
    }
    //add to the top of the stack
    push(data){
        this.data.insertAt(0, new Node(data));
    }

    //remove from the top of the stack
    pop(){
        const removed = this.data.getAt(0);
        if (removed != null){
            this.data.deleteAt(0)
        }
        return removed.getValue();
    }

    peek(){
        const top = this.data.getAt(0);
        if(top){
            return top.getValue()
        } else {
            return null;
        }
    }
}

module.exports = Stack;