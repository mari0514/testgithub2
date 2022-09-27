// linear search
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
