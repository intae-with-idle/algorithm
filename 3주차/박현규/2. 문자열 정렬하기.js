function solution(my_string) {
    let result = my_string.toLowerCase().split('').sort().join('')
    return result;
}
console.log(solution('Asdadgsdrrvdd'))