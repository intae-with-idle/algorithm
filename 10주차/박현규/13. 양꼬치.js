function solution(n, k) {
    let result = 0;

    result = (12000 * n) + (2000 *(k-Math.floor(n/10)))
    return result;
}