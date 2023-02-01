function solution(n) {
    let result = 0;
    let lcm = 1;

    while (true) {
        if (lcm % n === 0 && lcm % 6 === 0) {
            break;
        }
        lcm++;
    }
    result = lcm / 6
    return result;
}