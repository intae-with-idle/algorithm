function solution(strlist) {
    let result = [];

    for(let i = 0 ; i < strlist.length; i++){
        result.push(strlist[i].length)
    }
    return result;
}


// ----------------------------------------------------------------------


const solution = (strlist) => strlist.map(str => str.length)


// Array를 돌면서 특정한 동작을 수행하고 싶다면 map 함수를 사용할 것.
