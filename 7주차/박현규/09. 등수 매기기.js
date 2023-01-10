function solution(score) {
    let result = new Array(score.length).fill(1)
    let average = score.map(e => (e[0] + e[1]) / 2)

    for(let i = 0 ; i < average.length; i ++){
        for(let j = 0 ; j < average.length; j++){
            if(average[i] < average[j]){
                result[i]++;
            }
        }
    }
    return result
} 