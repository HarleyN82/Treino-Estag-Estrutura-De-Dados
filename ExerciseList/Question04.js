/* 

Consider the arrayA= 〈29,18,10,15,20,9,5,13,2,4,15〉.
(a) Does A satisfy themax-heap property? If not, fix it by swapping two elements.

The array A don´t satisfy the max heap property.〈29,20,10,15,18,,9,5,13,2,4,15〉-- troquei o 20 e o 18 de lugar.

(b) Using arrayA(possibly corrected), illustrate the execution of theheap-extract-maxal-gorithm, which extracts the max element and then rearrangesthe array to satisfy themax-heapproperty. 
For each iteration or recursion of the algorithm,write the contentof the arrayA.

*/


let list = [];
    
class BinaryHeap {
    
    //Heapify
    maxHeapify = (arr, n, i) => {
      let largest = i;
      let l = 2 * i + 1; //left child index
      let r = 2 * i + 2; //right child index
  
      //If left child is smaller than root
       if (l < n && arr[l] > arr[largest]) {
             largest = l; 
       }
  
       // If right child is smaller than smallest so far 
       if (r < n && arr[r] > arr[largest]) {
            largest = r; 
       }
  
       // If smallest is not root 
       if (largest != i) { 
            let temp = arr[i]; 
            arr[i] = arr[largest]; 
            arr[largest] = temp; 
  
          // Recursively heapify the affected sub-tree 
          this.maxHeapify(arr, n, largest); 
        } 
    }
    
    //Insert Value
    insert = (num) => {
      const size = list.length;
      
      if(size === 0){
        list.push(num);
      }else{
        list.push(num);
  
        //Heapify
        for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
           this.maxHeapify(list, list.length, i); 
        }
      }
    }
    
    //Remove value
    delete = (num) => {
      const size = list.length;
      
      //Get the index of the number to be removed
      let i;
      for(i = 0; i < size; i++){
        if(list[i] === num){
          break;
        }
      }
      
      //Swap the number with last element
      [list[i], list[size - 1]] = [list[size - 1], list[i]];
  
      //Remove the last element
      list.splice(size - 1);
      
      //Heapify the list again
      for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
           this.maxHeapify(list, list.length, i); 
       }
    }
    
    //Return max value
    findMax = () => list[0];
    
    //Remove max val
    deleteMax = () => {
      this.delete(list[0]);
    }
    
    //Remove and return max value
    extractMax = () => {
      const max = list[0];
      this.delete(max);
      return max;
    }
    
    //Size
    size = () => list.length;
    
    //IsEmpty
    isEmpty = () => list.length === 0;
    
    //Return head
    getList = () => list;
  }

Input:
var heap = new BinaryHeap();

//29,18,10,15,20,9,5,13,2,4,15

heap.insert(29);
heap.insert(18);
heap.insert(10);
heap.insert(15);
heap.insert(20);
heap.insert(9);
heap.insert(5);
heap.insert(13);
heap.insert(2);
heap.insert(4);
heap.insert(15);

console.log(heap.getList());
console.log(heap.findMax());

console.log(heap.extractMax());
console.log(heap.getList());
