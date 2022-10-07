/* 13. Write the pseudo code of the in-place insertion-sort algorithm, and illustrate its execution on
the array
                        A = [7, 17, 89, 74, 21, 7, 43, 9, 26, 10]

Do that by writing the content of the array at each main (outer) iteration of the algorithm.

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

let vetor = [7, 17, 89, 74, 21, 7, 43, 9, 26, 10];
insertionSort(vetor);
console.log(vetor);
