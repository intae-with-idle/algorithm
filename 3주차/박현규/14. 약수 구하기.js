function solution(n) {  //  내 풀이 (정상작동하나, 시간효율성이 떨어짐)
    let result = [];

    for (i = 0; i < n + 1; i++) {
        for (j = 0; j < n + 1; j++) {
            if (i * j == n) {
                result.push(i)
            }
        }
    }
    return result;
}

// 테스트 1 〉	통과 (238.78ms, 36.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (240.80ms, 36.6MB)
// 테스트 4 〉	통과 (0.23ms, 33.4MB)
// 테스트 5 〉	통과 (0.33ms, 33.4MB)
// 테스트 6 〉	통과 (174.77ms, 36.6MB)
// 테스트 7 〉	통과 (2.27ms, 36.6MB)
// 테스트 8 〉	통과 (1.96ms, 36.6MB)
// 테스트 9 〉	통과 (3.28ms, 36.6MB)
// 테스트 10 〉	통과 (129.03ms, 36.5MB)
// 테스트 11 〉	통과 (0.14ms, 33.4MB)
// 테스트 12 〉	통과 (0.15ms, 33.4MB)

function solution(n){
    let result = [];

    for (i = 0; i < Math.sqrt(n)+1; i++) {
        for (j = 0; j < n+1 + 1; j++) {
            if (i !==j && i * j == n) {
                result.push(i)
                result.push(j)
            }
            if (i == j && i * j == n){
                result.push(i)
            }
        }
    }
    return result.sort(function(a,b){
        return a-b
    });
}

// 테스트 1 〉	통과 (46.01ms, 36.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.4MB)
// 테스트 3 〉	통과 (36.50ms, 36.6MB)
// 테스트 4 〉	통과 (0.19ms, 33.5MB)
// 테스트 5 〉	통과 (0.21ms, 32.9MB)
// 테스트 6 〉	통과 (32.52ms, 36.2MB)
// 테스트 7 〉	통과 (44.35ms, 36.7MB)
// 테스트 8 〉	통과 (0.40ms, 33.4MB)
// 테스트 9 〉	통과 (2.30ms, 36.6MB)
// 테스트 10 〉	통과 (6.23ms, 36.5MB)
// 테스트 11 〉	통과 (0.20ms, 33.4MB)
// 테스트 12 〉	통과 (0.18ms, 33.4MB)

// 시간 효율성이 훨씬 증가했으나 코드 해석이 번거로울 여지가 있음.


function solution(n){
    let value = [];
    
    for (i = 0; i < Math.sqrt(n)+1; i++) {
        for (j = 0; j < n+1 + 1; j++) {
            if (i !==j && i * j == n) {
                value.push(i)
                value.push(j)
            }
        }
    }
    let valueUpper = value.sort(function(a,b){
        return a-b
    });

    let result = [...new Set(value.sort(function(a,b){
        return a-b
    }))]

    return result
}

// 테스트 1 〉	통과 (7.10ms, 36.6MB)
// 테스트 2 〉	통과 (0.08ms, 33.3MB)
// 테스트 3 〉	통과 (7.38ms, 36.6MB)
// 테스트 4 〉	통과 (0.22ms, 33.3MB)
// 테스트 5 〉	통과 (0.20ms, 33.3MB)
// 테스트 6 〉	통과 (43.86ms, 36.7MB)
// 테스트 7 〉	통과 (0.41ms, 33.5MB)
// 테스트 8 〉	통과 (0.34ms, 33.4MB)
// 테스트 9 〉	통과 (2.41ms, 36.5MB)
// 테스트 10 〉	통과 (5.26ms, 36.4MB)
// 테스트 11 〉	통과 (0.18ms, 33.1MB)
// 테스트 12 〉	통과 (0.18ms, 33.4MB)