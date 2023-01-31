function solution(numbers, num1, num2) {
    let result = [];

    for (let i = num1; i < num2 + 1; i++) {
        result.push(numbers[i])
    }
    return result;
}s

// -----------------------------------------------------------------------

function solution(numbers, num1, num2) {
    return numbers.slice(num1, num2 + 1);
}

// slice() 메서드는 어떤 배열의 처음부터 끝까지(끝 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환.원본 배열은 바뀌지 않습니다.
// slice(a,b) 일때,
// -----------------------------------------------------------------------

function solution(numbers, num1, num2) {
    return numbers.filter((n, i) => num1 <= i && i <= num2);
}

const solution = (numbers, num1, num2) => numbers.slice(num1, num2 + 1)