// Note Big O - N!
// Supondo que existe 3 pessoas em uma fila de ciname, de quantas maneiras elas podem se organizar?
// Lógica de Permutação: n*(n-1)
// Desafio: Mostre os resultados da permutação e registre o tempo de execução.
// Por exemplo: 1 pessoa está fixa, então sobra permutar o lugar das outras duas:
// [1,2,3] -- [1,3,2] -- [2,1,3] -- [2,3,1] -- [3,1,2] -- [3,2,1] = 6 possibilidades.

const data = [1,2,3,4,5]

for(let i = 0; i<=5; i++){

    let n = 5;

    if(i%2 == 0){
        data[i], data[n-1] = data[n-1],data[i]
    }else{
        data[0],data[n-1] = data[n-1],data[0]
    }

    let resultados = [data,n-1];
    console.log(resultados);
}