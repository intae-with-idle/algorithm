let canBabbling = ['aya', 'ye', 'woo', 'ma']

function solution(babbling) {
    result = 0  //  for문과 if문안에 없어야만, result = result + 1 에 대한 변동을 저장함.

    for (let i = 0; i < babbling.length; i++) {
        let babbling_len = babbling[i].length
        //  babbling_len에 대한 선언을 첫번째 for문에서 하는이유? 
        //  babbling_len = babbling_len-canBabbling[j].length 로 재할당된 babbling_len에 babbling[i].length가 재할당되지 않기때문.

        for (let j = 0; j < canBabbling.length; j++) {
            if (babbling[i].includes(canBabbling[j])) {
                babbling_len = babbling_len - canBabbling[j].length
                // babbling_len-canBabbling[j].length에 대한 값을 다시 babbling_len에 저장해주어야만 babbling_len == 0 이 
                // 만족하는 경우가 의도한대로 나오기 때문에 babbling_len = babbling_len 이란 표현을 써야함. (변수의 재할당)

                if (babbling_len == 0) {
                    result = result + 1
                    break
                }
            }
        }
    }
    return result
}