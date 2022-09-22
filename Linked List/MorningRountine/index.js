// Double Linked List

let head;
let previous;
let data;
let next;
let out;
let contador = 0;

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
            document.getElementById('div').innerHTML += `<p>${contents.data}</p>`
            contents = contents.next
        }
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
}

const myList = new MorningRoutine();

// Modificações no HTML

function adicionarElementos() { // mostra os elementos da lista encadeada

    document.getElementById('div').innerHTML = ""

    let inputRoutine = document.querySelector('#inputRoutine').value;

    if(inputRoutine == ""){
        alert("Você precisa digitar algo!!")
        console.log("Digite algo")
    } else{
        console.log(inputRoutine)
        myList.addRoutine(inputRoutine)
        console.log(myList.display())
    }
}

let div = document.getElementById('div');
let btnRemover = document.querySelector('#btnRemover');

btnRemover.onclick = (evt) => removerElementos(evt,div)

function removerElementos(evt,div) {

    if(evt.target.onclick){
        div = myList.removeAll();
    }   
}

myList.addRoutine(1)
myList.addRoutine(2)
myList.addRoutine(3)
myList.display()
myList.removeAll()
myList.display()

/* 

 let btnRemover = document.querySelector('#btnRemover').value;

        if(btnRemover){
            document.getElementById('div').innerHTML = null
            console.log(myList.removeAll())
        } else{
            console.log("Não há elementos para deletar")
        }
*/

// Eu quero deletar cada elemento;
// Eu quero que após apertar o botão o valor se apague no input - limpesa automática;