function solution(cipher, code) {
    let result = '';
    let number = parseInt(cipher.length / code) 
    
    for(let i = 1; i < number+1; i++){
        result = result + cipher[(i*code)-1]
    }
    return result;
}