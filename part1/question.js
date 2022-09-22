let arrayOfArray = [[true, false, false, true, false], [false, false, false, false, false], []];


function countTrue() {
  for(let i = 0; i < arrayOfArray.length; i++) {
    for(let k = 0; k < arrayOfArray[i].length; k++) {
      let count = [];
      if(arrayOfArray[i][k] === true) {
        count++;
      }
    }
    return count[i];
  }
}

countTrue();