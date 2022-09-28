// variables

let out;
let head;
let previous;
let last_node;
let data;
let next;
let total;
let contents;
let node_data;
let start_prev;
let current_node;
let previous_node;
let current_value;
let current_idx;

// implementation of Double linked list 

class DoubleNode { // nó

    constructor(data){  // dado da lista e o ponteiro
        this.data = data;
        this.next = null;
        this.previous = null; // cada nó vai ter a informação do nó anterior
    }
}

class DoubleLinkedList { // Minha classe base

    constructor(){  // dado da lista e o ponteiro

        this.head = null; // cabeça da lista
        this.tail = null; // último elemento da lista
    }

    append (data) {

        const new_node = new DoubleNode(data);

        new_node.next = null
    
        if(this.head == null){
            new_node.previous == null;
            this.head = new_node;
            return new_node;
        }

        last_node = this.head

        while (last_node.next){  // percorrer toda a estrutura, condição sempre verdadeira.
            last_node = last_node.next;
        }  

        last_node.next = new_node;
        new_node.previous = last_node;

        return
    }

    addAtStart(value){

        const new_node = new DoubleNode(value);

        if (this.head == null) {

            this.head = new_node
            console.log("Node inserted")
            return
        }

        new_node.next = this.head
        this.head.previous = new_node
        this.head = new_node

    }

    addAtEnd(value){

        const new_node = new DoubleNode(value);

       if (this.head == null){
            this.head = new_node
            return
       }

        current_node = this.head

        while (current_node.next != null){
            current_node = current_node.next
        }

        current_node.next = new_node
        new_node.previous = current_node

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
    
        console.log("-----------------")
    }

    toList () { // lista para converter a lista encadeada como um array []

        node_data = []
        current_node = this.head

        // Não é preciso chamar a função append e através dela chamar os dados.

        while(current_node){
            node_data.push(current_node.data);
            current_node = current_node.next;
        }

        return node_data
    }

    reverseLinkedList() { // vai reverter a lista encadeada
        
        const new_node = new DoubleNode();

        if(this.head == null){
            console.log("The list has no element to reverse")
            return 0
        }

        current_node = this.head
        new_node = current_node.next
        current_node.next = null
        current_node.previous = new_node 

        while(new_node != null){
            new_node.previous = new_node.next
            new_node.next = current_node
            current_node = new_node 
            new_node  = new_node.previous
        }

        this.head = current_node;
    }

    removeAtStart(){

        if(this.head == null){
            console.log("The list has no element to delete")
            return
        }

        if(this.head.next == null){
            this.head = null
            return
        }

        this.head = this.head.next
        this.start_prev = null
       
    }

    removeAtEnd(){

        if(this.head == null){
            console.log("The list has no element to delete")
            return
        }

        if (this.head.next == null){
            this.head = None
            return
        }

        current_node = this.head

        while (current_node.next != null){
            current_node = current_node.next
        }

        current_node.previous.next = null
    }

    removeAtValue(value){

        if (this.head == null){
            console.log("The list has no element to delete")
            return 
        }

        if (this.head.next == null){
            
            if (this.head.item == value){
                this.head = null
            } else {
                console.log("Item not found")
            }

            return;
        }

        if (this.head.data == value){

            this.head = this.head.next
            this.head.previous = null
            return
        }

        current_node = this.head

        while (current_node.next != null){

                if (current_node.data == value){
                    break
                }

                current_node = current_node.next

            if (current_node.next != null){
                current_node.previous.next = current_node.next
                current_node.next.previous = current_node.previous
            } else {

                if (current_node.data == value){
                    current_node.previous.next = null
                } else {
                    console.log("Element not found")
                }
            }
        }
    }

    lenght () { // calcula o tamanho da nossa lista

        if(this.head == null){
            return 0;
        }
    
        current_node = this.head
        total = 0
    
        while(current_node){  // enquanto não chegou no final
            total ++
            current_node = current_node.next
        }
    
        return total;
    }
}

// Test

let myList = new DoubleLinkedList();

myList.display();

myList.append(3);
myList.append(7);
myList.append(2);
myList.append(1);

console.log(myList.toList());
console.log("------------------")

myList.addAtStart(34);
myList.addAtEnd(90); // myList.removeAtEnd();
//myList.removeAtValue(34);
//myList.reverseLinkedList();
console.log("The total number of elements are: " + myList.lenght())

//myList.removeAll();
myList.display();
