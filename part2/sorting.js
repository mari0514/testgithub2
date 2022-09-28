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