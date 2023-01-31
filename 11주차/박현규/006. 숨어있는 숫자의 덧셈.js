function solution(my_string) {
    let result = 0;

    for(let i = 0 ; i < my_string.length; i++){
        if(isNaN(Number(my_string[i])) === false){
            result += Number(my_string[i])
        }
    }
    return result;
}