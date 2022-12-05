function solution(quiz) {
    let result = [];
    
    for (i = 0; i < quiz.length; i++) {
        let seperated = quiz[i].split(" ")
        let startNum = parseInt(seperated[0])
        let endNum = parseInt(seperated[2])
        let calculator = parseInt(seperated[1])
        let calcResult = parseInt(seperated[4])

        if (seperated[1] === '+') {
            if (startNum + endNum === calcResult) {
                result.push("O")
            } else {
                result.push("X")
            }
        } else if (seperated[1] === '-') {
            if (startNum - endNum === calcResult) {
                result.push("O")
            } else {
                result.push("X")
            }
        }

    }
    return result
}
console.log(solution(["3 + 5 = 8","6 - 3 = 3"]))

