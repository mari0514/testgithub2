// var msg = "Sign up now!";

function updateMessage(string) {
  console.log('------------');
  console.log(string);
  console.log('------------');
}

updateMessage("Sign up!");


var count = 0;

function increaseFunction(value) {
  let total = count + value;
  // return total;
  console.log(total);
}

increaseFunction(5);


function greeting(name) {
  let text = "Hello, " + name;
  return text;
  // console.log("Hello, " + name);
}

console.log(greeting("Mari"));
// greeting("Mari");


// function getArea(width, height) {
//   return width * height;
// }

// let area1 = getArea(2, 10);
// console.log(area1);

// let area2 = getArea(24, 5);
// console.log(area2);



function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area, volume];
  return sizes;
}

let getOneArea = getSize(4, 10, 5)[0];
console.log(getOneArea);
let getOneVolume = getSize(4, 10, 5)[1];
console.log(getOneVolume);



// function declaration
function basicFunction() {
  return "Hello World!";
}

let hey = basicFunction();
console.log(hey);

// function expression
let heya = function(name1) {
  return "Heya, " + name1;
}

console.log(heya("stranger"));



// this
var hotel = {
  name: "CICCC Hotel",
  rooms: 12,
  booked: 9,
  gym: false,
  openPool: false,
  roomTypes: ["Single bed", "Double bed", "King bed"],
  cheachAvailability: function() {
    return this.rooms - this.booked + " rooms available";
  },
}

// console.log(hotel);
console.log(hotel.name);
console.log(hotel.cheachAvailability());



var newHotel = {
  rooms: [
    {
      type: "Single bed",
      kitchen: false,
      count: 6,
      booked: 4,
    },
    {
      type: "Single bed",
      kitchen: true,
      count: 8,
      booked: 6,
    },
    {
      type: "Double bed",
      kitchen: false,
      count: 4,
      booked: 3,
    },
    {
      type: "Double bed",
      kitchen: true,
      count: 8,
      booked: 7,
    },
    {
      type: "King bed",
      kitchen: true,
      count: 3,
      booked: 3,
    },
  ],
  name: "New Hotel",
  gym: true,
  pool: true,
  checkKitchenAvailability: function(kitchen) {
    for (let i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].kitchen == kitchen) {
        return (this.rooms[i].count - this.rooms[i].booked) + " rooms with kitchen available";
      }
    }
  },
}

console.log(newHotel.checkKitchenAvailability(true));