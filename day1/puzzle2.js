const fs = require("fs");
const { argv } = require("process");

const txt_splited = fs.readFileSync(argv[2], "utf-8").trim().split("\r\n");

let vec1 = [];
let vec2 = [];

for (let i = 0; i < txt_splited.length; i++) {
  const [x, y] = txt_splited[i].trim().split(/\s+/).map(Number);
  vec1.push(x);
  vec2.push(y);
}
let uniqueVec1 = [];

for (let i = 0; i < vec1.length; i++) {
  let exist = false;
  for (let j = 0; j < uniqueVec1.length; j++) {
    if (vec1[i] === uniqueVec1[j]) {
      exist = true;
      break;
    }
  }
  if (!exist) {
    uniqueVec1.push(vec1[i]);
  }
}

let timeInList = [];
let vezes = [];

for (let i = 0; i < uniqueVec1.length; i++) {
  let contador = 0;
  for (let j = 0; j < vec2.length; j++) {
    if (uniqueVec1[i] === vec2[j]) {
      contador++;
    }
  }
  timeInList.push(contador);
  vezes.push(uniqueVec1[i] * contador);
}
const result = vezes.reduce((acc, val) => acc + val, 0);

console.log("Total matches:", result);
//22565391
