function solution(s) {
    let result = '';
    let sSplit = s.split('')

    for (i = 0; i < sSplit.length; i++) {
        for (j = 0; j < sSplit.length; j++) {
            if (i !== j && sSplit[i] == sSplit[j]) {
                sSplit.splice(i, 1)
                i--
                sSplit.splice(j, 1)
                j--
            }
            result = sSplit.join('')
        }
    }
    return result;
}

function solution(n) {
    let result = 0;

}