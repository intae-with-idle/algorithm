function solution(n) {
    let result = 0;
    let standard = Math.sqrt(n)

    for (let i = 1; i <= standard; i++) {
        if (n % i === 0 && standard !== i) {
            result += 2
        }
        if (n % i === 0 && standard === i) {
            result += 1
        }
    }
    return result
}