// Sep. 27
// serching algorithms

let arr = [89, 53, 6, 2, 4, 1, 8, 5, 15, 10, 12, 35, 60, 0, 24, 65, 3, 14, 74, 92];
let strArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"];
let target = 60;
let targetStr = "g";


// .includes()
if(arr.includes(target)) {
  console.log("60 is in the array");
} else {
  console.log("60 in not in the array");
}

if(strArr.includes(targetStr)) {
  console.log("\"g\" is in the array");
} else {
  console.log("\"g\" is not in the array");
}

// .indexOf()
// console.log(arr.indexOf(target));
// console.log(strArr.indexOf(targetStr));

// .find()
// arr.find(function(item) {
//   // mmm
// });

      // parameters
//            ↓     ↓
// arr.find((item, index) => {
//   console.log(item);
// });


console.log(arr.find((item) => item === target)); //returns 60
console.log(strArr.find((item) => item === "i")); // returns g
console.log(strArr.find((item) => item === "o")); // returns undefined

console.log(arr.findIndex(checkMoreThan90));
function checkMoreThan90(item) {
  return item >= 90;
}

console.log(strArr.findIndex(checkM));
function checkM(item) {
  return item === "m";
}