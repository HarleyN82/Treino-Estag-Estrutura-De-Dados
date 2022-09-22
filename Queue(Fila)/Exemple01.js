// Vamos usar o código de Stack como base

let items;
let item;
let size;
let value;

class Stack {

    constructor(){
        this.items = []
        size = 0
    }

    getSize(){
        return size;
    }

    push (item){
        this.items.push(item)
        size++
    }

    pop(){
        
        if(this.getContador() == 0){
            console.log("No have list")
            return null
        } else{
            this.items.pop()
            size--
        }
    }
}

let instorage; // o que está dentro
let outstorage;

class Queue {

    constructor(){
        this.instorage = new Stack();
        this.outstorage = new Stack();
    }

    getSize(){
        return this.outstorage.getSize() + this.instorage.getSize()
    }

    enqueue(item){
        this.instorage.push(item)
    }

    dequeue(){

        if(!this.outstorage.items){
            while(this.instorage.item){
                this.outstorage.push(this.instorage.pop())
            }

            return this.outstorage.pop()
        }
    }
}

const q = new Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

if(q.getSize() == 3){
    console.log("Pass")
} else{
    console.log("Fail")
}
