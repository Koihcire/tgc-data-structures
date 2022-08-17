class LinkedList {
    constructor(){
        //if the head is null it means the linked list is empty
        this.head = null;
        this.tail = null;
    }

    push(newNode){
        //case 1. list is empty (ie this.head = null)
        if (this.head == null){
            this.head = newNode;
        } else {
            // case 2. list is not empty
            // start from the head, go through the list until the last 'current' points to null
            let current = this.head;
            //move current until it reaches the last node on the list
            while (current.getNext() != null){
                current = current.getNext();
            }
            //when the current finishes, current will refer to the last node
            //then, set the next node to be the new node
            current.setNext(newNode)

            //TODO how to do away with the while loop? use a tail
            
        }
    }

    print(){
        let current = this.head;
        while (current != null){
            console.log(current.getValue());
            current = current.getNext();
        }
    }

    insertAt(index, newNode){
        if(this.head == null){
            return;
        } else {
            let current = this.head;
            for(let i = 0; i < index - 1; i++){
                current = current.getNext()
            }
            newNode.setNext(current.getNext())
            current.setNext(newNode);
        }
    }

    deleteAt(index){
        if(this.head == null){
            return;
        }
        if(index == 0){
            this.head = this.head.getNext();

            //no need to explicitly delete the old head
            //if there is no vairable refering to it, its automatically deleted
        } else {
            //move current so that it is just one node before the one to be delete
            let current = this.head;
            for(let i = 0; i < index - 1; i++){
                current = current.getNext();
            }
            //current should refer to one node before the one to be deleted (aka D)
            //the next of before should be the next of D
            const toBeDeleted = current.getNext();
            current.setNext(toBeDeleted.getNext())
        }

    }
}

module.exports = LinkedList