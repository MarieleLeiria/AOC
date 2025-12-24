const fs = require("fs");
const { argv } = require("process");

const txt_splited = fs.readFileSync(argv[2], "utf-8").trim().split("\r\n");

let lines = [];

for (let i = 0; i < txt_splited.length; i++) {
  const nums = txt_splited[i].trim().split(/\s+/).map(Number);

  lines.push(nums);
}

function countValidLines(lines) {
  let count = 0;

  for (let i = 0; i < lines.length; i++) {
    if (isValidLine(lines[i])) {
      count++;
    }
  }

  return count;
}

function isValidLine(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (isNaN(nums[i])) return false;
  }

  if (isValidSequence(nums)) return true;

  for (let i = 0; i < nums.length; i++) {
    let newList = [];

    for (let j = 0; j < nums.length; j++) {
      if (j !== i) {
        newList.push(nums[j]);
      }
    }

    if (isValidSequence(newList)) {
      return true;
    }
  }

  return false;
}

// regra de negócio pura
function isValidSequence(nums) {
  if (nums.length <= 1) return true;

  let direction = 0;

  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];
    const abs = Math.abs(diff);

    if (diff === 0 || abs < 1 || abs > 3) return false;

    if (direction === 0) {
      direction = diff > 0 ? 1 : -1;
    }

    if (diff * direction < 0) return false;
  }

  return true;
}

console.log("Total matches:", countValidLines(lines));
module.exports = { countValidLines };
