function solution (rsp) {
    let result = ''

    for(let i = 0 ; i < rsp.length; i++){
        let str = rsp[i] // rsp.charAt(i)
        if(str === '2'){
            result += '0'
        } else if (str === '5'){
            result += '2'
        } else if (str === '0'){
            result += '5'
        }
    }
    return result
}

// --------------------------------------------------

function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}