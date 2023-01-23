function solution(num_list) {
    let countEven = 0;
    let countOdd = 0;
    let result = [];

    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            countEven = + 1
        } else {
            countOdd = + 1
        }
    }
    result.push(countEven)
    result.push(countOdd)
    return result;
}


//----------------------------------------------------------------


function solution(num_list) {
    var answer = [0, 0];

    for (let el of num_list) {
        answer[el % 2] += 1
    }
    return answer;
}

// el % 2 를 answer의 index로써 활용하여, 값 자체를 index에 바로 접근하도록 활용함.
//----------------------------------------------------------------


function solution(num_list) {
    return [
        num_list.filter((num) => num % 2 === 0).length,
        num_list.filter((num) => num % 2 === 1).length,
    ];
}

// array를 만들고 그 array에 할당하는것이 아닌, 만들면서 반환시키는 형태
//---------------------------------------------------------------



const solution = (num_list) => 
[num_list.filter(num => num % 2 === 0).length, num_list.filter(num => num % 2).length]

// 위와 같으나, 함수 선언문과 화살표 함수의 차이.