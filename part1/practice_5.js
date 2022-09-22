// Sep. 21
// let num1 = 5;

// function calculate() {
//   let num2 = 10;
//   return num2;
// }

// let num3 = calculate();
// console.log(num3);


// let arr = [0, 1, 2, 3, 4,];
// let arrTemp = arr;
// console.log(arr);

// arr[0] = 20;

// arrTemp[1] = 50;
// console.log(arr);
// console.log(arrTemp);



// quiz
// var age = 18;
// var age = 20;
// console.log(age);



// let x, y, z;
// y = 2;
// z = x + y;
// console.log(z);

// console.log(1 + 5 + " bottles of milk");

// const myVar = '5'; 
// let myAddedVal = myVar + 10;
// console.log(myAddedVal);

// let y = 3;
// x = y++;
// console.log(x);

// console.log("1 plus 1 is " + 1 + 1);

// console.log(typeof 4);
// console.log(typeof 4.0);
// console.log(typeof -4);

// Primitive values (immutable datum represented directly at the lowest level of the language)
// Boolean type
// Null type
// Undefined type
// Number type
// BigInt type
// String type
// Symbol type
// Objects (collections of properties)

// Multiple Declarations of variables are separated by ___________ symbol.

// let age = prompt("Enter your age "); 
// let next = age + 1; 
// alert("On your next birthday, you'll be " + next);

// console.log(typeof next);

// console.log(typeof Na



// Sep. 22
function sayMyName(name) {
  return "Hello, " + name;
}

console.log(sayMyName("Mari"));
console.log(sayMyName("Tom"));
console.log(sayMyName("John"));

function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log(sumOfTwoNumbers(2, 4));

function SumOfThreeNumbers(num3, num4, num5) {
  let theTotal = num3 + num4 + num5;
  return num3 + " + " + num4 + " + " + num5 + " = " + theTotal;
}

console.log(SumOfThreeNumbers(2, 4, 6));


function isEven(num) {
  return num % 2 == 0;
}

function isOdd(num) {
  return num % 2 == 1;
}

console.log(isEven(10));
console.log(isOdd(10));
console.log("11 is even: ", isEven(11));
console.log("13 is odd: ", isOdd(11));


// condition ? true : false
console.log("condition ? true : false");
let number = 5;
let result = number == 5 ? "Yes" : "No";
console.log(result);


let arr = [
  {
    name: "Jane",
    age: 20,
  },
  {
    name: "Joe",
    age: 23,
  },
  {
    name: "John",
    age: 19,
  },
  {
    name: "Taylor",
    age: 22,
  },
  {
    name: "Tom",
    age: 26,
  },
];
console.log(arr[0].name + ": " + arr[0].age);

for(let i =0; i < arr.length; i++) {
  console.log(arr[i].name + " is " + arr[i].age + " years old.");
}

console.log("____________________");
console.log("20 < age < 24");
for(let i = 0; i < arr.length; i++) {
  if(arr[i].age > 20 && arr[i].age < 24) {
    console.log(arr[i].name);
  }
}
console.log("____________________");


// arr.forEach(); forEach method
arr.forEach(function(element, index){
  console.log(element.name);
});

//arr.map(); map method

// arr.filter(); filter method

console.log("____________________");

for(let x of arr) {
  console.log(x.name);
  console.log(x.age);

}


// question

let array1 = [true, false, false, true, false];
let array2 = [false, false, false, false, false];
let array3 = [];


// function countTrue() {
//   let count = 0;
//   for(let i =0; i < array1.length; i++) {
//     if(array1[i] === true) {
//       count++;
//     }
//   }
  
//   console.log(count);
// }
// countTrue();


// console.log("_______________");
// function countTrue2(arr) {
//   if(arr.length == 0) return 0;
//   let count = 0;
  
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i]) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countTrue2(array1));
// console.log(countTrue2(array2));
// console.log(countTrue2(array3));
// console.log("_______________");




console.log("_______________");
function countTrue(arr) {
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === true) {
        count++;
    }
  }
  return count;
}
    
console.log(countTrue(array1));
console.log(countTrue(array2));
console.log(countTrue(array3));
console.log("_______________");