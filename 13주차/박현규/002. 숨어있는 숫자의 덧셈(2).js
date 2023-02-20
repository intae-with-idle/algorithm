function solution(my_string) {
    let result = 0;
    let realNumDetect = '' 

    for(let i = 0; i < my_string.length; i++){
        realNumDetect += Number(my_string[i])
    }

    let realNums = realNumDetect.split('NaN')

    for(let i = 0 ; i < realNums.length; i++){
        result += Number(realNums[i])
    }
    return result;
}