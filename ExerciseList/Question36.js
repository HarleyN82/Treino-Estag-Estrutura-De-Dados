/* 
Write the pseudo-code of the insertion-sort algorithm. 

Illustrate the execution of the algorithm on the array A = {3, 13, 89, 34, 21, 44, 99, 56, 9}, 

writing the intermediate values of Aat each iteration of the algorithm. 
*/

function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}

let vetor = [3, 13, 89, 34, 21, 44, 99, 56, 9];
insertionSort(vetor);
console.log(vetor);