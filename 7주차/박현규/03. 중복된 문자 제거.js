function solution(my_string) {

    let myStringArray = my_string.split('')
    let dupDelete = Array.from(new Set(myStringArray))
    let result = dupDelete.join('')
    return result;
}