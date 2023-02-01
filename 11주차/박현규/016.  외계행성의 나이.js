function solution(age) {
    const ageArr = String(age).split('');
    let result = [];
    
    for(let i = 0; i < ageArr.length; i++){
        result.push(String.fromCharCode(Number(ageArr[i]) + 97));
    }
    
    return result.join('')
}

// 문자열을 아스키코드로 변환하여 해결.