function solution(angle) {
    let result = 0;

    if (angle < 90) {
        result = 1
    } else if (angle === 90) {
        result = 2
    } else if (angle < 180) {
        result = 3
    } else {
        result = 4
    }
    return result;
}

// 0 < x < 180  <- 양 부등호 표현 불가능
// 0 < x && x < 180   <- 논리 곱으로써 표현하는 방법사용.
// if문은 조건문에 해당되면 다른 else if 문에 해당하는지에 대해 검사하지 않고 과정을 멈춤.