function solution(array, height) {
    let result = 0;

    for(let i = 0 ; i < array.length; i++){
        if(array[i] > height){
            result += 1
        }
    }
    return result;
}

// 헷갈리지 말기 [result = result + 1] === [result += 1]



const solution = (array, height) =>
    array.filter(arrnum => arrnum > height).length

// filter 함수를 사용하여 특정 조건에 해당하는 index만을 새로운 array로 만들어서 해결