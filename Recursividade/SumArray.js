// [1,2,3] - somar todos os elementos do array.

let value = [];

function sum_array(value){

    let array = [];

    array.push(value);

    if(array.length == 1){
        return array[0]
    } else {
        return array[0] + sum_array(array[1])
    }
}

console.log(sum_array(1,2,3))