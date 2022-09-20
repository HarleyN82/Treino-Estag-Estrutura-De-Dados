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

// implementation of linked list 

class Node { // nó

    constructor(value){  // dado da lista e o ponteiro
        this.data = value;
        this.next = null;
    }
}

// Funções criadas dentro de uma classe não precisam de "function" ou algo do tipo, apenas o nome;
// Obs: Embora um arrow function + const funcione, nesse caso precisamos do nome para referenciar.

class DoubleLinkedList { // Minha classe base

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

    addAtStart(value){

        const new_node = new Node(value);
        new_node.next = this.head
        this.head = new_node
    }

    addAtEnd(value){

        const new_node = new Node(value);

        if(this.head == null){
            this.head = new_node
            return
        }

        current_node = this.head

        while(current_node.next != null){
            current_node = current_node.next
        }

        current_node.next = new_node
    }

    addAtValue(index,value){

        const new_node = new Node(value);
        let i;

        if(index == 1){
            new_node.next = this.head
            this.head = new_node
        }

        i = 1

        current_node = this.head

        while (i < index-1 && current_node !=null){
            current_node = current_node.next
            i = i + 1
        }
         
        if (current_node == null){
            console.log("ERROR: Index out of range!")
        } else{
            new_node.next = current_node.next 
            current_node.next  = new_node
        } 
            
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

    displayAt (value){

        if (value >= this.lenght() ||  value < 0 ) {
            console.log("Error: Index out of ranger")
            return null;
        }

        current_value = 0
        current_node = this.head

        while(current_node != null){

           if(current_value == value){
                //console.log( `Hey! I am ${current_value}. Congratulations, you found me!`)
                return value; //current_node.data - retorna a posição
           } 
           
           current_node = current_node.next
           current_value ++
        }
    }

    searchItem (value){

        if (value >= this.lenght() ||  value < 0 ) {
            console.log("Error: Index out of ranger")
            return null;
        }

        current_node = this.head

        while(current_node != null){

           if(current_value == value){
                console.log("This element exists in here!")
                return current_node.data  
           } else {
                console.log("Error: Didn`t find this element!")
           }

           current_node = current_node.next
           current_value++

        }

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

    removeAtStart(){

        if(this.head == null){
            console.log("The list has no element to delete")
            return
        }

        this.head = this.head.next
       
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

    removeAtEnd(){

        if(this.head == null){
            console.log("The list has no element to delete")
            return
        }

        current_node = this.head

        while(current_node.next.next != null){
            current_node = current_node.next
        }

        current_node.next = null;

    }

    removeAtValue(value){
        current_node = this.head

        if(current_node.data == value){
            this.head = current_node.next
            current_node = null
            return
        }

        while(current_node != null){
            if(current_node.data == value){
                break;
            } 

            prev = current_node
            current_node = current_node.next

            if(current_node == null){
                return
            }

            prev.next = current_node.next
            current_node = null

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

let myList = new LinkedList();

myList.display();

myList.append(3);
myList.append(7);
myList.append(2);
myList.append(1);

console.log(myList.toList());
console.log("------------------")

myList.addAtStart(34);
myList.addAtEnd(90); // myList.removeAtEnd();
myList.addAtValue(4,55);
//myList.removeAtValue(34);
//myList.reverseLinkedList();
console.log("The total number of elements are: " + myList.lenght())

//myList.removeAll();
myList.display();

/* ROUND MAP 
search_item - Responder se tem ou não o item; (OK)
remove_at-start - Remover o primeiro item da lista; (Ok)
remove_at-end - Remover o último item da lista; (OK)
remove_element_by_value - Remover um elemento pelo seu valor - informamos o valor, a função procura e o exclue. (OK)
insert-start - inserir o primeiro item da lista; (OK)
insert-end - inserir o o último item da lista; (OK)
insert_at-index - Inserir por index, tendo dois parâmetros - Index e o valor. (OK)
*/