//  내 풀이  
function solution(array) {
    let result = 0;
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].toString().length; j++) {
            if (array[i].toString()[j] == 7) {
                result += 1
            }
        }
    }
    return result
}
console.log(solution([7, 717777, 81]))


// 스승님 풀이
// function solution(array) {
//     let result = 0;

//     for (let i = 0; i < array.length; i++) {
//         let matchedList = array[i].toString().match(/7/g);
//         if (matchedList) {
//             result += matchedList.length;
//         }
//     }
//     return result;
// }