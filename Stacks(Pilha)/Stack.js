// Você pode colocar lista encadeada, arry, tudo dentro dele.

let items;
let size;

// como inverter um stack
// como fazer stack por array
// como fazer um stack por uma lista encadeada

class Stack {

    constructor(){
        this.items = []
        size = 0
    }

    getSize(){
        return size;
    }

    push (items){
        this.items.push(items)
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

    peek(){

        if(items === null){
            console.log("No have list")
            return null
        } else{
            return this.items[0];
        }
        
    }
}

// Test

const myStack = new Stack();

myStack.push("Page 1");
myStack.push("Page 2");
myStack.push("Page 3");
myStack.push("Page 4");

//myStack.pop(); // elimina automaticamente o primeiro item.

myStack.getSize();

console.log(myStack.items) // Exibe toda a pilha
console.log("O primeiro item é: " + myStack.peek())
console.log("Quantidade de Elementos na Pilha: " + myStack.getSize())