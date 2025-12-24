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

uniquevalues = [...new Set(vec1)];

let timeInList = [];
let vezes = [];
for (let i = 0; i < uniquevalues.length; i++) {
  let contador = 0;
  for (let j = 0; j < vec2.length; j++) {
    if (uniquevalues[i] === vec2[j]) {
      contador++;
    }
  }
  timeInList.push(contador);
  vezes.push(uniquevalues[i] * contador);
}
const result = vezes.reduce((acc, val) => acc + val, 0);

console.log("Total matches:", result);
//22565391
