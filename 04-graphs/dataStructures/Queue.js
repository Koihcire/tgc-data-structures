const LinkedList = require('./LinkedList')
const Node = require('./Node')

//Queue: only these actions are allowed (from a strict com sci pov)
//1. add to the back -- enqueue()
//2. remove from the front -- dequeue()
//3. see whats on the front -- peek()

class Queue {
    constructor(){
        this.data = new LinkedList()
    }
    // assume the newData is a value ,like integer, float or string
    enqueue(newData){
        this.data.push(new Node(newData))
    }

    dequeue(){
        //retrieve what is at the front of the linked list
        const front = this.data.getAt(0)
        //delete the front of the linked list
        this.data.deleteAt(0);
        return front.getValue(); 
    }

    // peek(){
    //     let front = this.data.getAt(0)
    //     if(front){
    //         return front
    //     } else {
    //         return null
    //     }
    // }
    peek(){
        //if getat(0) returns null, it will stop there. else, it will run getvalue()
        return this.data.getAt(0)?.getValue() //optional chaining short cut
    }
}

module.exports = Queue