const fs = require("fs");
const { argv } = require("process");

function parseMultiplicationsFromText(text) {
  const regex = /mul\(\s*([\d\s,]+)\s*\)/g;

  let resultado = [];
  let match;

  while ((match = regex.exec(text)) !== null) {
    const nums = match[1]
      .split(",")
      .map((n) => Number(n.trim()))
      .filter((n) => n >= 1 && n <= 999);

    resultado.push(nums);
  }
  return resultado;
}

const filePath = argv[2];

if (!filePath) {
  console.log("Erro: informe o arquivo. Exemplo:");
  console.log("node index.js input.txt");
  process.exit(1);
}

const texto = fs.readFileSync(filePath, "utf-8");

const result = parseMultiplicationsFromText(texto);
const somaTotal = result
  .map((par) => par.reduce((acc, num) => acc * num, 1))
  .reduce((acc, valor) => acc + valor, 0);

console.log(somaTotal);

console.log(result);
