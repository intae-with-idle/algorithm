function solution(array) {
    let result = [];

    result.push(Math.max(...array))
    result.push(array.indexOf(Math.max(...array)))
    return result;
}