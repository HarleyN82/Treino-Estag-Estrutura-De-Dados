// Crie um subarray - valores do próprio array se junta em um array próprio.
// Valor máximo da conta

/*function profitloops1() {

    var arr1 = new Uint8Array([12,34,56,44,22,10]);
    var new_arr1 = arr1.subarray(3);

    console.log("without using the subarray() method <br>");
    console.log(arr1);
    console.log("<br>");
    console.log("By using the subarray()/slice() method <br>");
    console.log(new_arr1);
}
profitloops1(); */

// O índice é o indiciativo de onde até onde é o subarray.
// A partir do elemento do índice em diante é o subarray

function findMaxSubarraySum(arr, n, sum)
{
     
    // To store current sum and
    // max sum of subarrays
    let curr_sum = arr[0], max_sum = 0,
        start = 0;
 
    // To find max_sum less than sum
    for(let i = 1; i < n; i++)
    {
         
        // Update max_sum if it becomes
        // greater than curr_sum
        if (curr_sum <= sum)
            max_sum = Math.max(max_sum, curr_sum);
 
        // If curr_sum becomes greater than
        // sum subtract starting elements of array
        while (curr_sum + arr[i] > sum && start < i)
        {
            curr_sum -= arr[start];
            start++;
        }
         
        // Add elements to curr_sum
        curr_sum += arr[i];
    }
 
    // Adding an extra check for last subarray
    if (curr_sum <= sum)
        max_sum = Math.max(max_sum, curr_sum);
 
    return max_sum;
}
 
// Driver code
let arr = [ 6, 8, 9 ];
let n = arr.length;
let sum = 25; // escolha o limite da soma. Abaixo de 25 o máx de soma é 23.
 
console.log(findMaxSubarraySum(arr, n, sum));