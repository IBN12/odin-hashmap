// Node Class:
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

// LinkedList Class:
export class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // add: adds an element at the end of list.
    add(element){
        let node = new Node(element); 

        let current;

        if (this.head === null)
        {
            this.head = node;
        }
        else 
        {
            current = this.head; 

            while (current.next){
                current = current.next;
            }

            current.next = node; 
        }
        this.size++; 
    }
}

