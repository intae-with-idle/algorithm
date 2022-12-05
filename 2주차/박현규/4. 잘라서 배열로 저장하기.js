//  풀이 1 (의도한대로 동작은 하나, my_str은 변수이므로 값을 정할 수 없어, 반복작업의 마지노선을 정할 수 없고, 의도하지않게 출력되는 undefined값을 막지 못함)
function solution(my_str, n) {
    let arr = my_str.split('')
    let newArray1 = [];
    let newArray2 = [];
    let newArray3 = [];
    let result = [];


    for (i = 0; i < n; i++) {
        newArray1 = newArray1 + arr[i]
    }

    for (i = n; i < 2 * n; i++) {
        newArray2 = newArray2 + arr[i]
    }

    for (i = 2 * n; i < my_str.length; i++) {
        newArray3 = newArray3 + arr[i]
    }

    result.push(newArray1);
    result.push(newArray2);
    result.push(newArray3);

    return result
}


//  풀이 1에서 이중 for문을 만들고 싶어짐
function solution(my_str, n) {
    let arr = my_str.split('')
    let result = [];


    for (i = 0; i < my_str.length / n; i++) {
        let newArray = [];
        for (j = i * n; j < i * n + n; j++) {
            if (my_str[j] == undefined) {
                break
            } else {
                newArray = newArray + my_str[j]
            }
        }
        result.push(newArray)
        return result
    }

    result.push(newArray1);
    result.push(newArray2);
    result.push(newArray3);

    return result
}


//  정답
function solution(my_str, n) {
    const result = []
    // n의 길이의 result를 만들기 위해 전체길이 / n 번 반복
    for (let i = 0; i < (my_str.length / n); i++) {
        let part = ''
        // 각 저장요소 별 내용 입력
        for (let j = i * n; j < i * n + n; j++) {
            if (my_str[j]) part += my_str[j]
            else break
        }
        result.push(part)
    }
    return result
}

// 스승님 풀이
function solution(my_str, n){
    let count = my_str.length / n;
    let start = 0;
    let end = n;

    for(let i=0; i<count; i++){
        result.push(my_str.slice(start, end));
        start = n * (i + 1)
        end = n * (i + 2)
    }
    return result
}

// 내풀이 _ 최종
function solution(my_str, n) {
    const result = [];

    for (i = 0; i < my_str.length / n; i++) {
        let newArray = '';

        for (j = i * n; j < i * n + n; j++) {
            if (my_str[j] == undefined) {
                break
            } else {
                newArray = newArray + my_str[j]
            }
        }
        result.push(newArray)
    }
    return result
}
