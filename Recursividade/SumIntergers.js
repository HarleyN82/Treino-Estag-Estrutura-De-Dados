// Soma de Inteiros 

function sum_intergers(n){ // isso aqui permite um auto-loop

    if(n<=1){
        return 1
    } else{
        return n + (sum_intergers(n-1))
    }
}

console.log("Resultado de 1: " + sum_intergers(2))
console.log("Número positivo: " + sum_intergers(3))

// 3 - 2 - 1
// O loop ocorre só na parte que chamamos a função o (n+..) é algo a parte.
// o n+ é fixo.