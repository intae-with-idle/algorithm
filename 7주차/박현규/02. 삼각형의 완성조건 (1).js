function solution(sides) {
    let valMax = Math.max(...sides)
    let valMaxIndex = sides.indexOf(valMax)
    
    sides.splice(valMaxIndex, 1)

    let elseSides = sides
    let elseSidesSum = sides.reduce(function add(sum, currVal) {
        return sum + currVal;
    }, 0);

    if (valMax < elseSidesSum) {
        let result = 1
        return result
    } else {
        let result = 2
        return result
    }
}