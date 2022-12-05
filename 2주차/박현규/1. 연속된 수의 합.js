function solution(num, total) {
    const result = [];
    let startNumber = 0;
    let sum = 0;

    for (let i = 0; i < num; i++) {
        sum += i;
    }

    if (total !== sum) {
        startNumber = startNumber + (total - sum) / num;
    }

    for (let i = 0; i < num; i++) {
        result[i] = startNumber + i
    }

    return result;
}