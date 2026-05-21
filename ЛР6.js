// 1
function unique(arr) {
  return [...new Set(arr)];
}

let arr1 = ["яблуко", "груша", "яблуко", "апельсин", "груша"];

console.log(unique(arr1));


// 2
function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word
      .toLowerCase()
      .split("")
      .sort()
      .join("");

    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr2 = [
  "nap",
  "teachers",
  "cheaters",
  "PAN",
  "ear",
  "era",
  "hectares"
];

console.log(aclean(arr2));


// 3
function countElements(arr) {
  let map = new Map();

  for (let item of arr) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }

  return map;
}

let arr3 = [1, 2, 2, 3, 1, 1, 4];

console.log(countElements(arr3));


// 4
function isUnique(arr) {
  return arr.length === new Set(arr).size;
}

console.log(isUnique([1, 2, 3, 4]));
console.log(isUnique([1, 2, 3, 1]));