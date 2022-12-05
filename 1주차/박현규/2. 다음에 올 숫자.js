function solution(common) {
    d1 = common[1] - common[0]  //  등차수열은 공차(d)가 같은것 (d1 == d2)
    d2 = common[2] - common[1]

    r1 = common[1] / common[0]  //  등비수열은 공비(r)가 같은것 (r1 == r2)

    if (d1 == d2) {
        return common[common.length - 1] + d1
        //  common.length는 common Array의 index의 총 갯수, Array는 [0]부터 시작하므로, -1을 해주었을때,
        //  common[common.length-1]은 Array의 마지막 index 값을 의미함. ex) [1,2,3] 일때, 3을 가져옴.
    } else {
        return common[common.length - 1] * r1
    }
}