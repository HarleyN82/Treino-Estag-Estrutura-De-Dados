// Estabeleça o quanto você quer que seu vetor original seja invertido
// Escolhemos a partir de um índice o quanto a mudança vai para esquerda.

function rotate_elements_left(array) {
    return [array[1], array[2], array[0]];
}
console.log(rotate_elements_left([3, 4, 5]));  
console.log(rotate_elements_left([0, -1, 2]));  
console.log(rotate_elements_left([7, 6, 5])); 

//console.log(rotate_elements_left())
// https://forum.freecodecamp.org/t/why-is-shift-not-a-function/430425
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-70.php
// https://www.alexlintu.com/left-rotation-js-solution/