function solution(numbers) {
    const descendingOrder = numbers.sort(function(a,b){
        return b - a
    })

    return descendingOrder[0] * descendingOrder[1]
}


// --------------------------------------------------------

function solution (numbers){
    numbers.sort((a,b)=>b-a)
    return numbers[0] * numbers[1]
}


// --------------------------------------------------------

//[1]
// let 내림차순 = arr.sort(function(a,b){
//     return b - a
// })

// [2]
// let 내림차순 = arr.sort((a,b)=>b-a)