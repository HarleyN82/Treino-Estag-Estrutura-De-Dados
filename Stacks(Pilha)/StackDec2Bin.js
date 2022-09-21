// Pilha de conversão de números decimal para binário

function dec2Bin(decNumber) {

    var restStack = [],
    rest,
    binaryString = ' '

    while(decNumber > 0){ // 23 -- loop - 11 -- loop - 5 -- loop - 2 -- loop - 1
        rest = Math.floor(decNumber%2) // 1 - não é divisivel por 2 -- loop - 1 -- loop - 1 -- loop - 0 - 1
        restStack.push(rest) // [1,1,1,0,1]
        decNumber = Math.floor(decNumber/2) // 23/2 = 11,5 = 11 -- loop - 11/2 = 5,5 = 5 -- loop - 5/2 = 2,5 = 2 -- loop - 2/2 = 1 -- loop - 1/2 = 0
    }

    while(restStack.length > 0){ // 5 -- loop - 4 -- loop - 3 -- loop - 2 -- loop - 1
        binaryString += restStack.pop().toString(); // recebe o último valor do arry convertido em string // último elemento = 1 -- loop - 0 -- loop - 1 -- loop - 1 -- loop - 1
    }

    return binaryString [10111]
}

console.log(dec2Bin(23));

// .pop() - remove o último elemento de um array e retorna um valor;
// .toString() - O método retorna uma string como uma string.

/* Passo a Passo da Questão

Enquanto o valor inserido for maior do que zero, iremos:
Calcular o seu resto quando ele é dividido por 2;
O resultado do resto anexamos no array restStack - a nossa pilha de restos;
E depois chamamos o valor e dividimos ele por 2.

Após isso, enquanto o tamanho do array for maior que zero, iremos:
Anexar na variável binaryString o valor do array como uma string.

*/