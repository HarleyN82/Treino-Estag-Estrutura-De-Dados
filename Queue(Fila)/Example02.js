// Você pode colocar lista encadeada, arry, tudo dentro dele.

var items = []
let size;

class Queue{

    enqueue(value){
        // adiciona um novo item
        console.log("Um novo item foi adicionado")
        items.push(value);
    }

    dequeue(){
        // remove um novo item
        console.log("O primeiro item foi removido!")
        return items.shift();
    }

    front(){
        // retorna o primeiro item
        return console.log("O primeito item da fila é " + items[0]);
    }

    isEmpty(){
        // verifica se está vazio
        return items.length === 0
    }
    
    size(){
        // verifica se está vazio
        return console.log("O tamanho da fila é: " + items.length);
    }

    display(){
        // imprime toda a fila
        console.log("Integrantes da Fila: " + items.toString())
    }
}

// Testes 

const q = new Queue();

console.log("\n")

console.log("A fila está vazia: " + q.isEmpty())
console.log("----------------------------------")

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

console.log("----------------------------------")
q.display()

console.log("----------------------------------")

console.log("A fila está vazia: " + q.isEmpty())
console.log("----------------------------------")

q.size()
console.log("----------------------------------")

q.front()
console.log("----------------------------------")

q.dequeue()
console.log("----------------------------------")

q.display()
console.log("----------------------------------")

q.size()
console.log("----------------------------------")

q.front()
console.log("----------------------------------")


