// Sep. 26
// Big O notation

//constant time => O(1)
//linear time => O(n)
// Quadratic => O(n^2)

// number time / n time => O(n) => linear time
function addUpTo(number) {
  // O(1)
  let total = 0;
  // O(n)
  for(let i = 1; i <= number; i++) {
    total = total + i;
  }
  // O(1)
  return total;
}

console.log(addUpTo(5));

// let t1 = performance.now();
// addUpTo(100);
// let t2 = performance.now();

// console.log(`Time Elapse: ${(t2 - t1) / 1000} seconds.`);


// O(3) =/ O(1) Constant time
function addUpTo2(number) {
  return (number * (number + 1) / 2);
  //             ↑         ↑    ↑
}

console.log(addUpTo2(8));



let largeArr = new Array(10).fill("Hello");
console.log(largeArr);

let nemoArray = ["Nemo"];
let allFrindsArray = ["Dory", "Bruice", "Marilyn"];

function findNemo(array) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === "Nemo") {
      console.log("Found Nemo!");
    }
  }
}
findNemo(nemoArray);


// constant time
function greetInPair(names) {
  console.log(`Hello ${names[0]}`);
  console.log(`Hello ${names[1]}`);
  console.log(`Hello ${names[2]}`);
}

greetInPair(["Tommy", "Arthur", "John"]);


// O(n) => linear time
function countUpAndDown(number) {
  console.log("Going up!"); // O(1) => constant
  // ↓ O(n) ↓
  for(let i = 0; i < number; i++) {
    console.log(i);
  }
  console.log("Goind down!"); // O(1) => constant
  // ↓ O(n) ↓
  for(let j = number - 1; j >= 0; j--) {
    console.log(j);
  }
}

// O(n) + O(n) = O(2n) == O(n)

countUpAndDown(4);




console.log("logAtLeast5");
function logAtLeast5(n) {
  for(let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

logAtLeast5(8);


console.log("logAtMost5");
function logAtMost5(n) {
  for(let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

logAtMost5(8);


// space complexity
// Most primitives(number, boolean, undefined, null) are constant

