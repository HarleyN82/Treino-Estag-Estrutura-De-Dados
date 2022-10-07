/* Write the pseudo-code of a function called findLargest that finds the largest number in an array using a divide-and-conquer strategy. 
You may use a syntax similar to Java. Also, write the time complexity of your algorithm in terms of big-oh notation. 
Briefly justify your complexity analysis. 
*/

function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
    const half = array.length / 2
    
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }

array = [3, 13, 89, 34, 21, 44, 99, 56, 9];

let arrayOrdenado = mergeSort(array);
console.log(" " + arrayOrdenado);
console.log(Math.max(...arrayOrdenado));   // OU console.log(arrayOrdenado[arrayOrdenado.length-1]);