function solution(order) {
    let result = 0;
    let num = order.toString()

    for (let i = 0; i < num.length; i++) {
        if(num[i] == '3' || num[i] == '6' || num[i] == '9'){
            result = result + 1
        }
    }
    return result;
}