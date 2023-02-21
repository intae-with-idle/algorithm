function solution(n) {
    let semiResult = [];

    while (n >= 2) {
        for (let i = 2; i < 10000; i++) {
            if (Number.isInteger(n / i) === true) {
                semiResult.push(i)
                n = n / i
                break;
            }
        }
    }

    semiResult = semiResult.sort(function (a, b) {
        return a - b
    })
    
    let result = [...new Set(semiResult)]
    return result;
}

// i < 10000 이라는 표현을 쓰기 보다는,
// 소수를 판별하는 함수를 만들어 ex) function isPrimeNum()
// i < isPrimeNum(10000) 라는 표현을 쓰는게 유지보수에 좋다는 생각이 듦.