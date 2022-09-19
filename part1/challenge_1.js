function capitalization(str) {
  var stringArray = str.split(" ");
  // console.log(stringArray);

  for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1); //stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].slice(1);
  }

  // return stringArray;
  return stringArray.join(" ");
}

// A Short Sentence ["a", "short", "sentence"]
console.log(capitalization("a short sentence")); 

// Look, it is working!
console.log(capitalization("look, it is working!"));