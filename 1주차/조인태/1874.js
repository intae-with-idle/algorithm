const fs = require("fs");

const input = fs.readFileSync("./1874").toString().trim().split("\n").map(n => Number(n));
const numberList = input.slice(1);
const stack = Array.from({ length: input[0] }, (_, i) => input[0] - i);
const temp = [];
let answer = [];
let index = 0;

while(stack.length || temp.length) {

  if(temp[temp.length - 1] === numberList[index]) {
    temp.pop();
    answer.push('-');
    index++;
  } else if(temp[temp.length - 1] > numberList[index]) {
    answer = ['NO'];
    break;
  } else {
    const value = stack.pop();
    temp.push(value);
    answer.push('+')
  }
}

console.log(answer.join('\n'));