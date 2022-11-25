const fs = require("fs");

const input = fs.readFileSync("./1811").toString().trim().split("\n");
const list = Array.from(new Set([ ... input ])).filter(item => !parseInt(item));

list.sort((a, b) => {
  if(a.length < b.length) {
    return -1;
  } else if(a.length === b.length) {
    return a.localeCompare(b);
  } else {
    return 1;
  }
});

console.log(list.join('\n'));