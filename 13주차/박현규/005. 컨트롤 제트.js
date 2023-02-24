function solution(s) {
    let result = 0;
    let sSplit = s.split(' ')

    while (true) {
        for (const element of sSplit) {
            if (element === 'Z') {
                sSplit.splice((sSplit.indexOf(element)) - 1, 2)
            }
        }
        if (sSplit.indexOf('Z') === -1) break;
    }

    if (sSplit[0] === undefined) {
        result = 0
    } else if (sSplit[1] === undefined){
        result = sSplit[0]
    } else {
        result = sSplit.reduce((prev, curr) => Number(prev) + Number(curr))
    }
    return result;
}
