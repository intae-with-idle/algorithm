function solution(n) {
    let result = [];

    for (let i = 0; i <= n; i++) {
        if (i % 2 === 1)
            result.push(i)
    }
    return result;
}


// ------------------------------------------------


const solution = (n) => new Array(n).fill(1).map((a, b) => a + b).filter(a => a % 2 === 1)

// new Array (n) 에서 n은 new Array의 length 를 말하며, 모든 index에 1을 넣고
// map 함수로 1,2,3,4,5 꼴로 만든 후, filter로 홀수를 걸러서 해결