function solution(a, b) {
    let result = 1;
    let GCD = 1;
    
    for (let i = 2; i < Math.min(a, b)+1; i++) {
        if (a % i === 0 && b % i === 0) {
            GCD = i;
        }
    }

    for (let j = 2; j < b / GCD+1; j++) {
        if (j % 2 !== 0 && j % 5 !== 0 &&  (b / GCD) % j ===0) {
            return 2
        }
    }

    return result;
}