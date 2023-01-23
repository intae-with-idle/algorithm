function solution(lines) {
    let result = 0;
    let fullLines = [];

    for(let i = 0 ; i < lines.length; i++){
        for(let j = lines[i][0]; j < lines[i][1]+1; j++){
            fullLines.push(j)
        }
    }
    return result;
}