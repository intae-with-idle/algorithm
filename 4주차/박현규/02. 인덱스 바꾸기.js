function solution(my_string, num1, num2) {
    let stringComponents = my_string.split('')
    let num1_string = stringComponents.splice(num1,1,stringComponents[num2]);
    stringComponents.splice(num2,1,num1_string.join(''))

    let result = stringComponents.join('')
    return result;
}