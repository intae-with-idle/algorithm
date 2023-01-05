function solution(i, j, k) {
    let arr = [];

    for (let x = i; x < j + 1; x++) {
        arr.push(x)
    }
    let arrString = arr.join('')

    let result = arrString.length - arrString.replaceAll(k.toString(),'').length
    return result;
}