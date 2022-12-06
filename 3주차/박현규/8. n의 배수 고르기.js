//  내 풀이
function solution(n, numlist) {
    let result = [];

    for(i=0; i<numlist.length; i++){
        for(j=0; j<100000; j++){
            if(numlist[i] == n * j){
                result.push(numlist[i])
            }
        }
    }
    return result;
}

// 다른 풀이
const solution = (n, numlist) => numlist.filter(result => result%n === 0)