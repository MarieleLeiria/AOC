const fs = require("fs");

function countValidLines(filePath) {
  const lines = fs.readFileSync(filePath, "utf8").trim().split(/\r?\n/);

  return lines.filter(isValidLine).length;
}

function isValidLine(line) {
  const nums = line.split(/\s+/).map(Number);

  if (nums.some(isNaN)) return false;

  if (nums.length === 1) return true;

  const diffs = nums.slice(1).map((n, i) => n - nums[i]);

  if (diffs.some((d) => d === 0)) return false;

  const increasing = diffs[0] > 0;

  return diffs.every((d) => {
    const abs = Math.abs(d);
    return abs >= 1 && abs <= 3 && (increasing ? d > 0 : d < 0);
  });
}
console.log("Total matches:", countValidLines(process.argv[2]));

module.exports = { countValidLines };
