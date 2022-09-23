
function power2(n){

    if(n <= 0){
       return 1; // ponto de partida do nosso problema 
    } else {
        return 2 * power2(n-1)
    }
}

console.log(power2(5)); // 32

// Lógica: 2 * (4 * 3 * 2 * 1) = 32.
// O loop só ocorre no "power(2-1)". O 2* é fixo.
