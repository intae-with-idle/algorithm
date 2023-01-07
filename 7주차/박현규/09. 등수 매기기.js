function solution(score) {
    let result = [];
    let averageScore = [];

    for (let i = 0; i < score.length; i++) {
        averageScore.push((score[i][0] + score[i][1]) / 2)
    }

    let averageRank = averageScore.sort(function (a, b) {
        return b - a
    });

    for (let j = 0; j < averageRank.length; j++) {
        for (let k = j + 1; k < averageRank.length; k++) {
            if (j < k && averageRank[j] == averageRank[k]) {
                result.push(j + 1)
            } else {
                result.push(j + 1)
            }
            return result;
        }
    }
} 