function solution(numbers, direction) {
    let result = [];

    if (direction === 'right') {
        result = [
            ...[numbers[numbers.length-1]],
            ...numbers.slice(0,numbers.length-1)
        ]
    } else if (direction === 'left'){
        result = [
            ...numbers.slice(1,numbers.length),
            ...[numbers[0]]
        ]
    }
    return result;
}

// ...spread operator (전개연산자)를 활용하여 Array 합치기를 사용.
// unshift, shift, pop, push만을 사용하여 해결할 수 있음.

function solution(numbers, direction) {
    var answer = [];

    if ("right" == direction) {
        numbers.unshift(numbers.pop());
    } else {
        numbers.push(numbers.shift());
    }

    answer = numbers;

    return answer;
}