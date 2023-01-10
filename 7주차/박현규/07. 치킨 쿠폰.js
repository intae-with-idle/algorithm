function solution(chicken) {
    let result = 0
    let leftCoupon = 0

    while (chicken >= 10) {
        let chickenByCoupon = Math.floor(chicken / 10)
        let cannotUseCoupon = chicken % 10

        chicken = chickenByCoupon
        leftCoupon = leftCoupon + cannotUseCoupon
        result = result + chickenByCoupon

        if (chickenByCoupon < 10) {
            leftCoupon = leftCoupon + chickenByCoupon
        }
    }
    result = result + Math.floor(leftCoupon / 10) + Math.floor((Math.floor(leftCoupon / 10) + leftCoupon % 10) / 10)
    return result;
}