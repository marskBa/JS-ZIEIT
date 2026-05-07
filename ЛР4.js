// 1
function ucFirst(str) {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
}

// 2
function checkSpam(str) {
  str = str.toLowerCase();
  return str.includes("росі") || str.includes("xxx");
}

// 3
function truncate(str, maxlength) {
  if (str.length <= maxlength) return str;
  return str.slice(0, maxlength - 1) + "…";
}

// 4
function strikeStr(str) {
  let words = str.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i += 3) {
    result.push(words.slice(i, i + 3).join(" "));
  }
  return result.join("\n");
}