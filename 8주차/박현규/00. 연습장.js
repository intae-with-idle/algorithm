function solution(numlist, n) {
  let result = [];
  let arr = [];

  for (let i = 0; i < numlist.length; i++) {
    arr.push(Math.abs(numlist[i] - n));
  }

  let resulting = arr.sort(function (a, b) {
    return a - b
  });

  let numMaxVal = 10000;
  let gapMaxVal = 9999;
  for (let j = 0; j < resulting.length; j++) {
    val = resulting[j]
    if (val < gapMaxVal) {
      gapMaxVal = resulting[j]
      numMaxVal = resulting[j] + n

      result.push(numMaxVal)
    }
  }
  return result;
}