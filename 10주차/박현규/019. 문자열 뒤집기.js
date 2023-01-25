function solution(my_string) {
    let result = '';

    for (let i = my_string.length - 1; i >= 0; i --){
        result = result + my_string[i]
    }
        return result;
}

// 문자열을 + 연산자를 사용하여 해결

// ------------------------------------------------------------

const solution = (my_string) => my_string.split('').reverse().join('');

// string을 array 형태로 변경후 reverse 함수를 사용하여 array의 index 순서를 뒤집어서 해결