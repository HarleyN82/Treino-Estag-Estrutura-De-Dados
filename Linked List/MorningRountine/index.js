// Double Linked List

let head;
let previous;
let data;
let next;
let inputRoutine = document.querySelector('#inputRoutine').value;
let contents;
let node_data;
let current_node;
let previous_node;

class Node { // cada nó será composto por esss elementos
    constructor (value){
        this.data = value;
        this.next = null;
        this.prev = null;
    }
}

class MorningRoutine {

    constructor(){ // a base da minha lista - inicio e fim -
        this.head = null;
        this.tail = null;
    }

    addRoutine(inputRoutine){

        const new_node = new Node(inputRoutine); // chama o construtor

        new_node.next = null
    
        if(this.tail){
            this.tail.next = new_node;
            new_node.previous = this.tail;
            this.tail = new_node;
            return new_node;
        }

        this.head = this.tail = new_node;
        return new_node
    }

    display() { // mostra os elementos da lista encadeada

        contents = this.head // conteúdo da função
    
        if(contents == null){
            console.log("List has no element")
        }

        while(contents){
            console.log(contents.data)
            contents = contents.next
        }
    }
}

const myList = new MorningRoutine();
myList.display();




