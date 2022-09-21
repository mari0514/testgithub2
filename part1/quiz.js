// Top 10 JavaScript code challenges for beginners
// 1. Print all even numbers from 0 – 10
console.log("Quiz 1");
for (let number = 0; number <= 10; number++) {
  if (number % 2 == 0) {
    console.log(number);
  }
}
console.log("Done!");
console.log("_____________________");

// 2. Print a table containing multiplication tables
console.log("Quiz 2");

console.log("In progress");
console.log("_____________________");

// 3. Create a length converter function => kilometers to miles
console.log("Quiz 3");
function lengthConverter(num) {
  // return num / 1.609;
  console.log(num / 1.609);
}
lengthConverter(3);
console.log("Done!");
console.log("_____________________");

// 4. Calculate the sum of numbers within an array
console.log("Quiz 4");

console.log("In progress");
console.log("_____________________");

// 5. Create a function that reverses an array
console.log("Quiz 5");
let arr = [1, 2, 3, 4, 5]; //[0][1][2][3][4] => [4][3][2][1][0] arr.length = 5 (arr.length - (i + 1))
// function reverseArray(input) {
//   arr = new Array;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     arr.push(input[i]);
//   }
//   // return arr;
//   console.log(arr);
// }
// reverseArray();


// for(let i = 0; i < arr.length; i++) {
//   arr.push(arr[arr.length - i]);
// }
// console.log(arr);

// for(let i = 0; i < arr.length; i++) {
//   let num = arr[arr.length - i + 1];
//   arr.push(num);
// }
// console.log(arr);

// for(let i = 0; i < arr.length; i++) {
//   arr.push(1);
// }
// console.log(arr);

// for(let i = 1; i < 6; i++) {
//   arr = arr.push(i);
// }
// console.log(arr);

// let array = [1, 2, 3];
// let numArray = array;
// for(let i = 0; i < array.length; i++) {
//   array.shift();
//   let num = numArray[array.length - 1];
//   array.push(num);
// }

// console.log(array);

const reversedArr = arr.reverse();
console.log(arr);

console.log("Kinda done");
console.log("_____________________");

// 6. Sort an array from lowest to highest
console.log("Quiz 6");
let num = [3, 8, 11, 24, 16, 2, 17, 154, 87, 43];
function compareNumbers(a, b) {
  return a - b;
}
num.sort(compareNumbers);
console.log(num);
console.log("Done!");
console.log("_____________________");

// 7. Create a function that filters out negative numbers
console.log("Quiz 7");
let arr2 = [2, -4, 4, -12, 5, 1, -6, 10, 24, -5];
arr2 = arr2.filter(
  function(x) {
    return x >= 0;
  }
);
console.log(arr2);
console.log("Kinda done");
console.log("_____________________");

// 8. Remove the spaces found in a string
console.log("Quiz 8");
let string = "He ll o";
let noSpaceString = string.split(" ").join("");
console.log(noSpaceString);

// let string2 = "Gppd mprning";
// console.log(string2);
// let newString2 = string2.split("p").join("o");
// console.log(newString2);

console.log("Done!")
console.log("_____________________");

// 9. Return a Boolean if a number is divisible by 10
console.log("Quiz 9");
function isDivisibleByTen(number) {
  if(number % 10 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isDivisibleByTen(10));
console.log(isDivisibleByTen(5));
console.log(isDivisibleByTen(50));

console.log("Done!")
console.log("_____________________");

// 10. Return the number of vowels in a string
console.log("Quiz 10");

var string3 = "abc that de this fghi those jkl these mno";
var searchA = "a";
var searchE = "e";
var searchI = "i";
var searchO = "o";
var searchU = "u";

var count = 0;

for(let i =0; i < string3.length; i++) {
  if(string3[i] == searchA || string3[i] == searchE || string3[i] == searchI || string3[i] == searchO || string3[i] == searchU) {
    count++;
  }
}
console.log(count);

console.log("Done! but maybe i can make it better")
console.log("_____________________");
