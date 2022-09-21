// Sep. 20
console.log(!0);
console.log(!1);

var score1 = 20;
var score2 = 30;
var score3 = 45;

var totalPassScore = 70;

var isPassed = ((score1 + score2 + score3) >= totalPassScore);

console.log(isPassed);
console.log("RESULT");

if (isPassed) {
  console.log("Passed!");
} else {
  console.log("Failed!");
}


// array & for
var studentsScore = [
  {
    name: "Joe",
    GPA: 3.2,
    class: "Algebra",
  },
  {
    name: "Hannah",
    GPA: 3.4,
    class: "Java Script",
  },
  {
    name: "Alex",
    GPA: 3.8,
    class: "Physics",
  },
  {
    name: "Lisa",
    GPA: 3.6,
    class: "Geology",
  },
]

var passScore = 3.6;

function checkResult(arr) {
  for (let i =0; i < arr.length; i++) {
    if (arr[i].GPA >= passScore) {
      console.log(arr[i].name + " passed the exams of " + arr[i].class);
    } else {
      console.log(arr[i].name + " failed the exams of "+ arr[i].class);
    }
  }
}

checkResult(studentsScore);


console.log("1" > 0);
console.log("1" == 1);
console.log("1" === 1);

var string1 = "123";

var intvalue = 123;

console.log( string1 + intvalue );


var  obj=

{

length:20,

height:35,

}

if ('breadth' in obj === false)

{

obj.breadth = 12;

}

 

console.log(obj.breadth);