// Note Big O(n^2)
// Printar o par de cada número - [1,1] ou [1,2] ou [1,3] ou [1,4]
// For para percorrer a lista e outro for e multiplica eles.

const dobro = x => x * 2

var numeros = [1,2,3,4]
var dobros = []

for (i = 0; i <= numeros.length; i++) {
    dobros[numeros[i]] = dobro(numeros[i])
}

console.log(dobros)


