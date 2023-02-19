function solution(emergency) {
    let result = [];

    for(let i = 0; i < emergency.length; i++){
        let individual = 0;

        for(let j = 0 ; j < emergency.length; j++){
            if(emergency[i] <= emergency[j]){
                individual += 1
            }
        }
        result.push(individual)
    }
    return result;
}