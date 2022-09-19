// variables
console.log("variables");
var car = {
  model: "Mustang",
  color: "red",
  year: 1964,
}

console.log(car.model);
console.log(car.color);
console.log(car.year);


// function
console.log("function");
function sayHi(firstName, lastName, age) {
  return `Hi, ${firstName} ${lastName} (${age})`;
}

console.log(sayHi("Mari", "Miyazaki", 24));
console.log("=========================================");


// array
console.log("array");
let arr = [5, 14, "Mari", "M"];
let numberArr = [50, 24, 2, 78, 30, 5, 14, 124];
console.log(arr[2]);
arr[0] = "May";
console.log(arr);
console.log(arr.length);
arr[4] = ".";
console.log(arr);

console.log(arr.includes(6));
console.log(arr.includes(3));
arr.push("Yep", "Nope", "idk");
console.log(arr);

console.log(numberArr.sort());

console.log("=========================================");

// sort
let numbers = [5, 2, 14, 27, 56, 32, 4, 9, 11];
numbers.sort((a, b) => a - b);
console.log("sort " + numbers);

console.log("=========================================");

//function scope & block scope
console.log("scope");
function start() {
  var varCount = 0;
  let letCount = 0;

  console.log(varCount, letCount);

  {
    var count1 = 0;
    let count2 = 0;

    console.log("var variable ", count1, " let variable ", count2);
  }
  console.log("var varialbe ", count1);
  // console.log("let varialbe ", count2); error occured

}
start();

console.log("=========================================");


// for structure
console.log("for structure");
// var functions = [];

// for(var i = 0; i < 3; i++) {
//   functions[i] = function() {
//     console.log("Chapter " + (i + 1));
//   };
// }

// for(var j = 0; j < functions.length; j++) {
//   functions[j]();
// }

console.log("=========================================");


// あ
function START() {
  var name1 = "Joe";

  function displayTheName() {
    console.log(name1);
  }
  displayTheName();
}

START();

console.log("=========================================");

// another for example
for (let x = 0; x < 10; x++) {
  console.log("x is: ", x);
  for (let y = 1; y < 3; y++) {
    console.log("y is: ", y);
  }
}

console.log("=========================================");

// aa


console.log("=========================================");

const obj = {
  number1: 1,
  number2: 2,
  number3: 3,
};

for (let x in obj) {
  console.log(x);
  console.log(obj[x]);
}

console.log("________________");

const person = {fName: "John", lName: "Krasinski", age: 42, location: "Boston", isMale: true};

for (let x in person) {
  // console.log("↓" + x + "↓");
  // console.log(person[x]);
  console.log(x + ": " + person[x]);
}


console.log("=========================================");

// another for

let newArr = [
  {
    name: "Jane",
    lastname: "Doe",
  },
  {
    name: "Chris",
    lastname: "Doe",
  },
];

for (let x of newArr) {
  console.log(x); //elements
}

for (let x = 0; x < newArr.length; x++) {
  console.log(newArr[x]);
}


console.log("=========================================");

let greeting = "Hello World!";

for (let x of greeting) {
  console.log(x);
}

console.log("  ");

for (let x = 0; x < greeting.length; x++) {
  console.log(greeting[x]);
}

console.log("=========================================");

let arr2 = [
  {
    name: "Tom",
    lastname: "Holland",
    location: "Kingston",
  },
  {
    name: "Tobey",
    lastname: "Maguire",
    location: "Boston",
  },
  {
    name: "Andrew",
    lastname: "Garfield",
    location: "Los Angeles",
  }, 
  3,
  "Spider-Man",
];

for (let a of arr2) {
  console.log(a);
}

for (let a of arr2) {
  if (typeof a === "object") {
    console.log("This is an object.");
  } else if (typeof a === "string") {
    console.log("This is a string.");
  } else {
    console.log("This is not an object and a string.");
  }
}

console.log("=========================================");

const arr3 = [
  "Hello",
  "Al",
  "Mari",
  "Dwayne",
]

for (let i of arr3) {
  // console.log(i);
  if (i == "Hello" || i == "Mari") {
    console.log(i);
  }
}

console.log("=========================================");

// while
let i = 0;
let text;

while (i <= 10) {
  console.log(i);
  // text += "The number is " + i + " ";
  i++;
}

// console.log(text);

console.log("=========================================");

// Do ..while
/*
do {

}
while (condition)
*/
let m = 0;

do {
  console.log(m);
  m++;
}
while (m < 5) 

console.log("=========================================");

const cars = ["BMW", "Mercedez", "Porche", "Volvo"];

// for (let p = 0; p < cars.length; p++) {
//   console.log(cars[p]);
// }

let p = 0;
while (cars[p]) {
  console.log(cars[p]);
  p++;
}

console.log("=========================================");

// continue, break
for (let q = 0; q < 10; q++) {
  if (q === 3 ) {
    continue; //skips 3
  } 
  console.log(q);
}


console.log("=========================================");

let n = "mari";
let restOfTheName = n.slice(1);
console.log(n[0].toUpperCase() + restOfTheName);