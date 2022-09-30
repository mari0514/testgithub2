// Sep. 28

// const array1 = [1, 30, 4, 21, 100000];

// console.log(array1.sort()); // [1, 100000, 21, 30, 4]


// function numberCompare(num1, num2) {
//   return num1 - num2;
// }

// console.log(array1.sort(numberCompare));


// Bubble sort
// Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.

/*
[22, 20, 64, 13, 12, 8, 34]
*/


// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     for(let j = 0; j < array.length - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// }

// console.log(bubbleSort([5, 4, 3, 2, 1, 0]));
// console.log(bubbleSort([2, 6, 8, 1, 3, 5, 4, 7]));



// selection sort
console.log("selection sort");
/* The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from the unsorted part and putting it at the beginning. */
// one loop inside of another loop => linear time * linear time
// O(N) * O(N) = O(N^2) => quadratic time

/*
[22, 25, 64, 11, 12, 34]
[11, 25, 64, 22, 12, 34]
[11, 12, 64, 22, 25, 34]
[11, 12, 22, 64, 25, 34]
[11, 12, 22, 25, 64, 34]
[11, 12, 22, 25, 34, 64]
*/


let array = [3, 2, 5, 19, 24, 10, 1, 35, 22];

function swap(arr, xp, yp) {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}


function selectionSort(arr) {
    var i, j, minIndex;
    for (i = 0; i < arr.length - 1; i++)
    {
        minIndex = i;
        for (j = i + 1; j < arr.length; j++)
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
        swap(arr, minIndex, i);
    }
    return array;
}

console.log(selectionSort(array));


// selection sort function no.2
function selectionSort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] =[arr[min], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort2(array));

console.log("____________________");

// Insertion sort algorithm

console.log("Insertion sort");

function insertionSort(arr)  {  
    let i, key, j;  
    for (i = 1; i < arr.length; i++) {  
        key = arr[i];  
        j = i - 1;
        while (j >= 0 && arr[j] > key) {  
            arr[j + 1] = arr[j];  
            j = j - 1;  
        }  
        arr[j + 1] = key;  
    }  
    return arr;
}  

console.log(insertionSort(array));



console.log("____________________");
// merge sort
// time complexity: O(n log(n))
// space complexity: O(n)
console.log("Merge sort");

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;

}

function mergeSort(arr) {
  const half = arr.length / 2;

  if (arr.length < 2) {
    return arr;
  }

  const left = arr.splice(0, half); 
  const right = arr;
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([4, 1, 3, 6, 5, 8, 2, 9, 0, 1]));
console.log(mergeSort([7, 12, 9, 4, 8, 2, 19, 14, 3, 15, 17, 5, 6, 1, 20, 16, 0, 18]));

console.log("____________________");


// Quick sort
// Time complexity: O(log(n)) or O(n^2) when worst
// Space complexity: O(log(n))
console.log("quick sort");


function swap(items, leftIndex, rightIndex){
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function partition(items, left, right) {
  var pivot   = items[Math.floor((right + left) / 2)], //middle element
      i       = left, //left pointer
      j       = right; //right pointer
  while (i <= j) {
      while (items[i] < pivot) {
          i++;
      }
      while (items[j] > pivot) {
          j--;
      }
      if (i <= j) {
          swap(items, i, j); //swap two elements
          i++;
          j--;
      }
  }
  return i;
}

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
      index = partition(items, left, right); //index returned from partition
      if (left < index - 1) { //more elements on the left side of the pivot
          quickSort(items, left, index - 1);
      }
      if (index < right) { //more elements on the right side of the pivot
          quickSort(items, index, right);
      }
  }
  return items;
}

var items = [6, 12, 2, 20, 18, 3, 14, 10, 7, 5, 13, 8, 16, 9, 4, 1, 5, 0];
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray);