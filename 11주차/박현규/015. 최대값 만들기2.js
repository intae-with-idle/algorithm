function solution(numbers) {
    let result = 0;
    let sortedNum = numbers.sort(function (a, b) {
        return a-b
    })

    let negatvieNumsMultiply = sortedNum[0] * sortedNum[1]
    let positiveNumsMultiply = sortedNum[sortedNum.length -1] * sortedNum[sortedNum.length -2]

    result = Math.max(negatvieNumsMultiply,positiveNumsMultiply)
    return result;
}

// -----------------------------------------------------------------------------------------------

const solution = (numbers) => {
    let len = numbers.length
    numbers.sort(function(a,b){return a-b})
    return Math.max(numbers[0]*numbers[1],numbers[len-1]*numbers[len-2])
}