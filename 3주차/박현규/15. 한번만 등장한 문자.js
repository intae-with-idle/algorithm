function solution(s) {
    let stringToArray = s.split('')
    let list = [];
    let result = list.join('')

    for (i = 0; i < stringToArray.length; i++) {
        for (j = 0; j < stringToArray.length; j++) {
            if (i !== j && stringToArray[i] == stringToArray[j]) {

            } else {
                list.push(stringToArray[i])
            }
        }
    }

    return result;
}