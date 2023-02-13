function solution(n) {
  let result = 0;

  for(let i = 1 ; i <= 10; i++){
    if(n/i >= 1){
      n = n/i
      result += 1
    }
  }
  return result;
}