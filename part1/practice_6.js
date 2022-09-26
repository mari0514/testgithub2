// Sep. 23 

// Recursive functions
// A recursive function always has a condition to stop calling itself. Otherwise it will call itself indefinately.

// function recurse() {
//   if(condition) {
//     // stop calling itself
//     // ...
//   } else {
//     recurse();
//   }
// }


function factorial(number) {
  if(number == 0) {
    return 1;
  } else {
    console.log("Number:", number);
    return number * factorial(number - 1);
  }
}

console.log(factorial(0));
console.log(factorial(4));
console.log(factorial(5));

// 4! = 4 * 3 * 2 * 1
// factorial(4) = 4 * factorial(3) = 4 * 6



// Recursive function for countdown
console.log("-- countdown --");
function countdown(num) {
  // Print the number passed to the current recursive call
  console.log(num);

  // Base case
  if (num - 1 >= 0) {
    // If current number decreased by 1
    // is higher than 0 or equal to 0 call countdown() again
    // with number decreased by 1
    return countdown(num - 1);
  }
}

// Call the countdown() function
countdown(8);



// Another recursive function for countdown
console.log("-- countdown2 --");
function countdown2(number) {
  console.log(number);
  let next = number - 1;
  if(next > 0) {
    return countdown2(number - 1);
  }
}
console.log(countdown2(4));



// recursive function for sum
console.log("sum function");
function sum(number) {
  if(number <= 1) {
    return number;
  } else {
    return number + sum(number - 1);
  }
}

console.log(sum(5)); // sum of 5, 4, 3, 2, 1
console.log(sum(12)); // sum of 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// sum function by using for structure
// *** NEED TO RETHINK ABOUT THIS!!! ***
// function sumByUsingFor(number) {
//   let sum = 0;
//   for(let i = 0; i <= number; i++) {
//     sum += 1;
//   }
//   return sum;
// }
// console.log(sumByUsingFor(8)); // 8+7+6+5+4+3+2+1


// For structure & Recursion function for power
console.log("-- For structure for power --");
function power(number, x) {
  let result = 1;
  for(let i = 0; i < x; i++) {
    result *= number;
  }
  return result;
}

console.log(power(2, 2));
console.log(power(2, 3));
console.log(power(2, 4));
console.log(power(2, 5));


console.log("-- Recursion function for power --");
function pow(number, x) {
  if(x == 1) {
    return number;
  } else {
    return number * pow(number, x - 1);
  }
}

console.log(pow(2, 2));
console.log(pow(2, 3));
console.log(pow(2, 4));
console.log(pow(2, 5));



// Regular expressions: objects
console.log("-- Regular expressions --");

let regex1 = /rem/;
let regex2 = /abc/;
let regex3 = / /;
console.log("Type of regular expressions is \"" + typeof regex1 + "\""); // object

let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

console.log(regex1.test(lorem));
console.log(regex2.test(lorem));
console.log(regex3.test(lorem));


let str = "abbbbc";
let str1 = "abc";
let str2 = "ab";

let regex4 = /ab*c/;

console.log(regex4.test(str));
console.log(regex4.test(str1));
console.log(regex4.test(str2));



// Arrow function
console.log("-- Arrowfunctions --");
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

// console.log(materials.map(material => material.length));
materials.forEach((item) => console.log(item));

// comparison of traditional functions and arrow functions
console.log("-- comparison of traditional functions and arrow functions --");

function addHundred(num) {
  return num + 100;
}

console.log(addHundred(10));

console.log(a => a + 100);
