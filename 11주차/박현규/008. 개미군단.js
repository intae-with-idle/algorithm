function solution(hp) {
    let result = 0;

    if(hp >= 5){
        result = result + Math.floor(hp/5)
        hp = hp % 5
    }

    if(hp >= 3){
        result = result + Math.floor(hp/3)
        hp = hp % 3
    }

    if(hp >= 1){
        result = result + Math.floor(hp/1)
    }
    return result;
}

const solution = (hp) => parseInt(hp/5) + parseInt((hp%5)/3) + parseInt(((hp%5)%3)%3) 