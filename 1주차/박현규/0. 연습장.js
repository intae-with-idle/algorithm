function solution(common) {
    let d1 = common[1] - common[0]
    let d2 = common[2] - common[1]
    let r1 = common[1] / common[0]

    if (d1 == d2) {
        return common[common.length - 1] + d1
    } else {
        return common[common.length - 1] * r1
    }
}