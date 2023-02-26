function solution(balls, share) {
    let result = 0;
    let ballIndiv = [];
    let shareIndiv = [];
    let bal_shareIndiv = [];

    for (let i = 1; i <= balls; i++) {
        ballIndiv.push(i)
    }

    for (let j = 1; j <= share; j++) {
        shareIndiv.push(j)
    }

    if (balls === share) {
        result = 1
        return result
    }

    for (let k = 1; k <= (balls - share); k++) {
        bal_shareIndiv.push(k)
    }

    let ballsResult = ballIndiv.reduce((prev, curr) => prev * curr)
    let shareResult = shareIndiv.reduce((prev, curr) => prev * curr)
    let bal_shareResult = bal_shareIndiv.reduce((prev, curr) => prev * curr)

    result = Math.round(ballsResult / (shareResult * bal_shareResult))
    return result;
}



// const factorial = (num) => num === 0 ? 1 : num * factorial(num - 1)

// function solution(balls, share) {
//     return Math.round(factorial(balls) / factorial(balls - share) / factorial(share))
// }