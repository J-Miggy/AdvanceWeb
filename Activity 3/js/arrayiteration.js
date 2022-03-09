const numbers0 = [1, 5, 9, 13];
const numbers1 = numbers0.map(myFunction);

document.getElementById("arrayiteration").innerHTML = numbers1;

function myFunction(value, index, array) {
    return value * 2;
  }