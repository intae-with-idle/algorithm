function solution(num_list, n) {
  let result = [];
  let reusltLen = Math.ceil(num_list.length / n)

  for (let i = 0; i < reusltLen; i++) {
    result.push(num_list.splice(0,n))
  }
  return result
}