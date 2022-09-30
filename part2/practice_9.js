// Sep. 28
// Recursive function

// sumRange
console.log("____________________");
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(5));
console.log("____________________");



// fibonacci
console.log("____________________");
console.log("fibonacci function");
function fibonacci(num) {
  var a = 1, b = 0, temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
}

console.log(performance.now());
console.log(fibonacci(21));
console.log(performance.now());

console.log("____________________");

console.log("fibonacci recursion function");
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13
console.log(fibonacci(8)); // 21
console.log(fibonacci(9)); // 34
console.log(fibonacci(10)); // 55
console.log(fibonacci(11)); // 89
console.log(fibonacci(12)); // 144

console.log("____________________");

console.log("factorial recursion function");
function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}

console.log(factorial(4));
console.log(factorial(5));

console.log("____________________");


function countdown(n){
  let array = [];
  if (n <= 0) {
    array = [];
    return array;
  } else {
    array = array.push(n-1);
    return array;
  }
}
console.log(countdown(4));


const myFunc = str => {
  if (str.length > 1) {
    return myFunc(str.slice(1));
  }

  return str;
};

console.log(myFunc('Hello world'));