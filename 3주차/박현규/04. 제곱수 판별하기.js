function solution(n) {
    for (x = 0; x < 1000; x++) {
        if (x ** 2 == n) {
            return 1
        } else if (x ** 2 > n) {
            return 2
        }
    }
}

//스승님 풀이
function solution(n) {
    let x = 1;
    while (true) {
        if (x ** 2 == n) {
            return 1;
        } else if (x ** 2 > n) {
            return 2;
        }
        x++;
    }
}       