// Sep. 27

// linear search <= O(n) <= linear time
// if the amount of the elements is n, the average of the process takes n/2 times
// if n = 1000, it takes 500 times to find the element thet you're looking for
console.log("--- linear search ---");

let array = [5, 8, 1, 100, 12, 3, 12];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(array, 12));
console.log(linearSearch(array, 6));



// binary search <= O(log(n)) = logarithmic time
// if the amount of the elements is n, the average of the process takes log(n) times
// if n = 1000, it takes about 10 times to find the element thet you're looking for

console.log("--- binary search ---");

let arrOfNumbers = [89, 53, 6, 2, 4, 1, 8, 5, 15, 10, 12, 35, 60, 0, 24, 65, 3, 14, 74, 92];

// ascending order
let sortedArr = arrOfNumbers.sort((a, b) => a - b);
console.log(sortedArr);
// sortedArr = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 15, 24, 35, 53, 60, 65, 74, 89, 92];

// descending order
// let reversedSortedArr = arrOfNumbers.sort((a, b) => b - a);
// console.log(reversedSortedArr);


newArr = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];

function binarySearch(arr, target) {
  let startPoint = 0;
  let endPoint = arr.length - 1;
  while (startPoint <= endPoint) {
    let middle = Math.floor((startPoint + endPoint) / 2); // Math.floor(4.5) = 4
    if (arr[middle] === target) { 
      return middle;
    } else if (arr[middle] < target) { 
      startPoint = middle + 1; 
    } else {
      endPoint = middle - 1;
    }
  }
  return `${target} can't be fount in the array.`;
}

console.log(`The index number of the target is ` + binarySearch(sortedArr, 8));
console.log(`The index number of the target is ` + binarySearch(sortedArr, 74));
console.log(`The index number of the target is ` + binarySearch(sortedArr, 24));

console.log(binarySearch(newArr, 80));
console.log(binarySearch(newArr, 55));