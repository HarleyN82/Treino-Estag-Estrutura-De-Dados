// Segunda Forma de Usar Stack

class Stack {
    constructor(size){
        this.stack = new Array(size);
        this.size = size;
        this.tail = -1
    }

    isFull(){
        return this.size -1 === this.tail;
    }

    push(elemento) {

        if (this.isFull()) {
            return console.log("Pilha cheia, a adição de novos elementos não é possivel");
        } else {
            this.tail++;
            this.stack[this.tail] = elemento;
           return console.log(`O valor ${elemento} foi adicionado à pilha`);
        }
    }

    peek(){
        if(this.isEmpty()) {
            return "A pilha está vazia"
          } else {
            return console.log(this.stack[this.tail]);
        }
    }

    displayAll(){

        if(this.isEmpty()) {
            console.log("A pilha está vazia")
            return 
        } else{
            return console.log(this.stack)
        }
    }

    isEmpty() {
        return this.tail === -1;
    }

    pop() {
        if (this.isEmpty()) {
          return "Pilha vazia, a sua operação não foi efectuada";
        } else {
          let elemento = this.stack[this.tail];
          this.stack[this.tail] = undefined;
          this.tail--;
          return console.log(`O valor ${elemento} foi removido da pilha`)
        }
    }

    deleteStack(){
        if(this.isFull()){
            console.log("A pilha foi deletada!")
            return this.stack = 0
        }
    }
}

let pilha = new Stack(3);

pilha.push(100); // O valor 100 foi adicionado à pilha
pilha.push(200); // O valor 200 foi adicionado à pilha
pilha.push(300); // O valor 300 foi adicionado à pilha
pilha.push();
pilha.push();

//pilha.pop(); // O valor 300 foi removido da pilha
//pilha.displayAll();
//console.log("Topo da pilha:") 
pilha.peek(); // 300
pilha.deleteStack();
pilha.displayAll();