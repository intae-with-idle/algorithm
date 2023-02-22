function solution(numbers, k) {
    return numbers[(k - 1) * 2 % numbers.length];
}


// function solution(numbers, k) {
//     let result = 0;
//     let numLen = numbers.length

//     if (numLen % 2 === 0 && (k % (numLen / 2)) !== 0) {
//         k = k % (numLen / 2)
//         result = 2 * k - 1
//     } else {
//         result = 2 * (numLen / 2) - 1
//     }

//     if (numLen % 2 !== 0 && k > numLen && (k % numLen) <= Math.ceil(numLen / 2)) {
//         k = k % numLen
//         result = 2 * k - 1
//     } else if (numLen % 2 !== 0 && k > numLen && (k % numLen) > Math.ceil(numLen / 2)) {
//         k = k % numLen
//         result = 2 * (k - Math.ceil(numLen / 2))
//     } else if (numLen % 2 !== 0 && k % numLen === 0 ){
//         result = numLen - 1
//     }
//     return result;
// }