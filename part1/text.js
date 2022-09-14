// variables
var car = {
  model: "Mustang",
  color: "red",
  year: 1964,
}

console.log(car.model);
console.log(car.color);
console.log(car.year);


// function
function sayHi(firstName, lastName, age) {
  return `Hi, ${firstName} ${lastName} (${age})`;
}

console.log(sayHi("Mari", "Miyazaki", 24));


// array
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


