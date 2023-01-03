function solution(i, j, k) {
    let result = 0
    for (let x = i; x < j + 1; x++) {
        if ('x'.includes('k')) {
            result = result + 1
        }
    }
    return result;
}