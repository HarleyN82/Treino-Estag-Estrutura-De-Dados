/* 19. You wish to create a database of stars. For each star, the database will store several megabytes
of data. Considering that your database will store billions of stars, choose the data structure
that will provide the best performance. With this data structure you should be able to find,
insert, and delete stars. Justify your choice. 
*/

// variables

let out;
let head;
let prev;
let data;
let next;
let total;
let contents;
let node_data;
let contador = 0;
let current_node;
let previous_node;
let current_value;
let current_idx;

let dataBaseStars = [];

// implementation of linked list 

class Node { // nó

    constructor(value){  // dado da lista e o ponteiro
        this.data = value;
        this.next = null;
    }
}

class LinkedList { // Minha classe base

    constructor(){  // dado da lista e o ponteiro
        this.head = null; // cabeça da lista
    }

    append (value) {

        const new_node = new Node(value);

        current_node = this.head;
    
        if(!current_node){
            this.head = new_node;
            return new_node;
        }

        while (current_node.next){  // percorrer toda a estrutura, condição sempre verdadeira.
            current_node = current_node.next;
        }  

        current_node.next = new_node;
        return new_node;
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

    searchItem (value){

        contents = this.head // conteúdo da função

        while(contents != null){

            for(let i = 0; i<=dataBaseStars.length; i++){

                if(value == dataBaseStars[i]){
                    return value;
                } 
            }

            return console.log("nops")
        }
    }

    reverseLinkedList() { // vai reverter a lista encadeada
        
        previous_node = null;
        current_node = this.head

        while(current_node != null){
            next = current_node.next;
            current_node.next = previous_node;
            previous_node = current_node;
            current_node = next;
        }
        this.head = previous_node;
    }
    
    removeAll(){

        if(this.head === null){
            return null;
        } else {

            out = this.head
            this.head = this.head.previous_node  // como não é circular, não tem elemento antes dele.
            console.log("All elements was removed")

            if(contador > 0){
                contador--
            }

            return out.data
        }
    }

    removeAtValue(value){

        var index = dataBaseStars.indexOf(value);

        contents = this.head // conteúdo da função

        while(contents != null){

            for(let i = 0; i<=dataBaseStars.length; i++){
                if(value == dataBaseStars[i]){
                    console.log(value + " was removed")
                    return dataBaseStars.splice(index,i-1) // i serve para limitar a remoção apenas ao valor desejado. // -1 - para no valor pedido
                } 
            }

            return console.log("nops")
        }
    }
}

// Test

let myList = new LinkedList();

dataBaseStars = [
    "Achernar",
    "Alya",
    "Electra",
    "Eltanin",
    "Libertas",
    "Meissa",
    "Nashira",
    "Polaris",
    "Saiph",
    "Zaniah"
];

let dataBaseConstelations = [
    "Andrômeda",
    "Aquila",
    "Carina",
    "Cassiopeia",
    "Corvus",
    "Draco",
    "Hércules",
    "Orion",
    "Perseus",
    "Phoenix"
];

myList.display();
myList.append(dataBaseStars);

myList.display();
console.log("The total number of elements are: " + dataBaseStars.length);

console.log(myList.searchItem("Electra"))

myList.removeAtValue("Electra");
myList.display();
console.log("The total number of elements are: " + dataBaseStars.length);

myList.removeAll();
myList.display();

