function solution(my_string, n) {
    let result = [];

    for (let i = 0; i < my_string.length; i++) {
        for (let j = 0; j < n; j++) {
            result.push(my_string[i])
        }
    }
    return result.join('')
}

// -----------------------------------------------------------

const solution = (my_string,n) =>
    my_string.split('').map(str=>str.repeat(n)).join('')
