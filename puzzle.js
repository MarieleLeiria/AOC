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

pairs = [];

vec1.sort((a, b) => a - b);
vec2.sort((a, b) => a - b);

//console.log("Vector 1:", vec1);
//console.log("Vector 2:", vec2);

for (let i = 0; i < vec1.length; i++) {
  pairs.push([vec1[i], vec2[i]]);
}

const resultados = pairs.map(([x, y]) => {
  const distance = x - y;
  if (x == y) {
    return 0;
  } else if (distance < 0) {
    return distance * -1;
  } else {
    return distance;
  }
});

const totalDistance = resultados.reduce((acc, val) => acc + val, 0);

//console.log("Pairs:", pairs);
//console.log("Resultados:", resultados);
console.log("Distancia total:", totalDistance);
