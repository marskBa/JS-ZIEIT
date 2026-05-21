// 1
function sumSalaries(salaries) {
  let sum = 0;

  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
}

let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300
};

console.log(sumSalaries(salaries));


// 2
function count(obj) {
  return Object.keys(obj).length;
}

let user = {
  name: "Ivan",
  age: 20,
  city: "Kyiv"
};

console.log(count(user));


// 3
let person = {
  name: "John",
  years: 30
};

let {
  name,
  years: age,
  isAdmin = false
} = person;

console.log(name);
console.log(age);
console.log(isAdmin);