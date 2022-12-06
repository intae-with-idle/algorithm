function solution(n){
    let num = n.toString()
    let result = 0

    for(i = 0; i < num.length; i++){
        result += parseInt(num[i]);
    }
    return result
}
