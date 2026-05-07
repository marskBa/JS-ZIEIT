// 1
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor(styles.length / 2)] = "Classics";
let first = styles.shift();
styles.unshift("Rap", "Reggae");

// 2
function sumInput() {
  let arr = [];
  while (true) {
    let value = prompt();
    if (value === null || value === "" || isNaN(value)) break;
    arr.push(+value);
  }
  let sum = 0;
  for (let num of arr) sum += num;
  return sum;
}

// 3
function getMaxSubSum(arr) {
  let max = 0;
  let curr = 0;
  for (let num of arr) {
    curr = Math.max(0, curr + num);
    max = Math.max(max, curr);
  }
  return max;
}
