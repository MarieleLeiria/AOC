function isValidLine(line) {
  const nums = line.split(/\s+/).map(Number);

  for (let i = 0; i < nums.length; i++) {
    if (isNaN(nums[i])) return false;
  }

  if (nums.length <= 2) return true;

  // definir direção
  let direction = 0;

  for (let i = 1; i < nums.length; i++) {
    let diff = nums[i] - nums[i - 1];
    if (diff !== 0) {
      direction = diff > 0 ? 1 : -1;
      break;
    }
  }

  if (direction === 0) return false;

  let errors = 0;

  for (let i = 1; i < nums.length; i++) {
    let diff = nums[i] - nums[i - 1];
    let abs = Math.abs(diff);

    // se mudar direção → descarta direto
    if (diff * direction < 0) return false;

    // regra 1 a 3
    if (abs < 1 || abs > 3) {
      errors++;

      if (errors > 1) return false;

      let temp = [];

      for (let j = 0; j < nums.length; j++) {
        if (j !== i) temp.push(nums[j]);
      }

      return isValidSequence(temp, direction);
    }
  }

  return true;
}
const counter = [];

function isValidSequence(nums, direction) {
  for (let i = 1; i < nums.length; i++) {
    let diff = nums[i] - nums[i - 1];
    let abs = Math.abs(diff);

    if (diff * direction < 0) return false;
    if (abs < 1 || abs > 3) return false;
  }

  return true;
}
