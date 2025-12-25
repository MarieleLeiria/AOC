const fs = require("fs");
const { argv } = require("process");

function parseMultiplicationsFromText(text) {
  const regex = /(do\(\)|don't\(\)|mul\(\s*(\d{1,3})(\s*,\s*\d{1,3})*\s*\))/g;

  let habilitado = true;
  let soma = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const token = match[1];

    if (token === "do()") {
      habilitado = true;
    } else if (token === "don't()") {
      habilitado = false;
    } else if (token.startsWith("mul") && habilitado) {
      const nums = token.match(/\d{1,3}/g).map(Number);
      const produto = nums.reduce((acc, n) => acc * n, 1);
      soma += produto;
    }
  }

  return soma;
}

const filePath = argv[2];

if (!filePath) {
  console.log("Erro: informe o arquivo. Exemplo:");
  console.log("node index.js input.txt");
  process.exit(1);
}

const texto = fs.readFileSync(filePath, "utf-8");

console.log(parseMultiplicationsFromText(texto));
