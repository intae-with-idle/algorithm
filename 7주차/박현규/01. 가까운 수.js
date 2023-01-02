function solution(array, n) {
    let newArray = array.sort(function (a, b) {
        return a - b;
    });

    let gap = [];

    for (let i = 0; i < newArray.length; i++) {
        gap.push(Math.abs(n - newArray[i]))
    }

    let arrMaxVal = 100;
    let gapMaxVal = 99;
    for(let j = 0; j < gap.length; j ++){
        val = gap[j]
        if(val < gapMaxVal){
            arrMaxVal = newArray[j]
            gapMaxVal = gap[j]
        }
    }
    return arrMaxVal
}