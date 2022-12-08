// 정삭작동하나, return 값이 읽기 좋지 않아서 치환하고자 함.
function solution(n){
    let result = [];

    for (i = 0; i < Math.sqrt(n)+1; i++) {
        for (j = 0; j < n+1 + 1; j++) {
            if (i * j == n) {
                result.push(i)
                result.push(j)
            }
        }
    }
    return [...new Set(result.sort(function(a,b){
        return a-b
    }))];
}


// 치환하고 return result가 의도한대로 동작하지 않음.
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