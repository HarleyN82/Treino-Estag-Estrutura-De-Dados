// Pilha de conversor de Decimal para qualquer base

function baseConvertor(decNumber,base) {

    var restStack = [],
    rest,
    baseString = ' ',
    digits = '0123456789ABCDEF'

    while(decNumber > 0){ // 123 -- loop - 7
        rest = Math.floor(decNumber%base) // 11 -- 7
        restStack.push(rest) // [11,7]
        decNumber = Math.floor(decNumber/base) // 123/16 = 7.6(7) // 7/16 = 0
    }

    while(restStack.length > 0){ // 2 -- loop - 1
        baseString += digits[restStack.pop()]; // Posição 7°(7) -- loop - Posição 11(B)
    }

    return baseString // 7B
}

// TEST

console.log("Valor de Teste: 123");
console.log("Bases:");
console.log(" - Hexadecimal: " + baseConvertor(123,16)); // 7B
console.log(" - Binário: " + baseConvertor(123,2)); // 1111011
console.log(" - Octal: " + baseConvertor(123,8)); // 255

// base hexadecimal = 16
// base Octal = 8

// Aplicação de Stack - Último a entrar e primeiro a sair - Pop.