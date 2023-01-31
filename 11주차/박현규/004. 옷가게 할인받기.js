function solution(price) {
    let result = 0;

    if (100000 <= price && price < 300000) {
        result = Math.floor(price * 0.95)

    } else if (300000 <= price && price < 500000) {
        result = Math.floor(price * 0.9)

    } else if (500000 <= price) {
        result = Math.floor(price * 0.8)
        
    }
    return result;
}