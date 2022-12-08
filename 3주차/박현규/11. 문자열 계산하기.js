function solution(my_string) {
    let result = 0;
    let strComponents = my_string.split(" ")

    for (i = 0; i < strComponents.length; i++) {
        if (i == 1) {
            if (strComponents[i] == '+') {
                result = parseInt(strComponents[i - 1]) + parseInt(strComponents[i + 1])
            } else {
                result = parseInt(strComponents[i - 1]) - parseInt(strComponents[i + 1])
            }
        }
        if (i !== 1 && i % 2 == 1) {
            if (strComponents[i] == '+') {
                result = result + parseInt(strComponents[i + 1])
            } else {
                result = result - parseInt(strComponents[i + 1])
            }
        }
    }
    return result
}   