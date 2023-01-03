function solution(before, after) {
    let result = 0;
    let newBefore = before.split('').sort().join('')
    let newAfter = after.split('').sort().join('')
    
    for (let i = 0; i < after.length; i++) {
        if (newAfter[i] !== newBefore[i]) {
            result = 0
            return result
        }
    }
    result = 1
    return result
}