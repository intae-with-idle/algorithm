function solution(my_string) {
    let resulting = ''
    let result = [];

    for (let i = 0; i < my_string.length; i++) {
        if (isNaN(Number(my_string[i])) === false) {
            resulting += my_string[i]
        }
    }
    result = resulting.split('').sort(function (a, b) {
        return a - b;
    })

    for(let j = 0 ; j < result.length; j++){
        result[j] = Number(result[j])
    }
    return result;
}

// ------------------------------------------------------------

const solution = (my_string) => {
    return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
}