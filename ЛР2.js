// 1
let user = {};
user.name = "Марк";
user.surname = "Сміт";
user.name = "Тарас";
delete user.name;

// 2
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// 3
let salaries = {
  Jarik: 1000,
  Anna: 1600,
  Miko: 1300
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

// 4
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
