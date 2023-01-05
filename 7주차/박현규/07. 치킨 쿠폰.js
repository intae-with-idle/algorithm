function solution(chicken) {
    let result = 0
    let temp = 0
    
    while (chicken >= 10) {
        let canUseCoupon = Math.floor(chicken / 10)
        let cannotUseCoupon = chicken % 10
        
        chicken = canUseCoupon
        temp = temp + cannotUseCoupon
        result = result + canUseCoupon
        
        if(canUseCoupon < 10){
            temp = temp + canUseCoupon
        }
        if(temp >= 10){
            result = result + Math.floor(temp / 10)
            temp = temp - 10
        }
    }
    return result;
}