function solution(quiz) {
    let result = [];

    for (i = 0; i < quiz.length; i++) {
        let seperated = quiz[i].split(" ")
        let startNum = parseInt(seperated[0])
        let endNum = parseInt(seperated[2])
        let calculator = seperated[1]
        let calcResult = parseInt(seperated[4])

        if (calculator === '+') {
            if (startNum + endNum === calcResult) {
                result.push("O")
            } else {
                result.push("X")
            }
        } else if (calculator === '-') {
            if (startNum - endNum === calcResult) {
                result.push("O")
            } else {
                result.push("X")
            }
        }

    }
    return result
}