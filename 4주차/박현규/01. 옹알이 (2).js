let canBabbling = ["aya", "ye", "woo", "ma"]

function solution(babbling) {
    let result = 0;

    for (i = 0; i < babbling.length; i++) {
        let newBabbling = JSON.parse(JSON.stringify(babbling[i]))  //  깊은 복사

        for (j = 0; j < canBabbling.length; j++) {
            replace_babble = newBabbling.replaceAll(canBabbling[j], '*')  //  깊은 복사본의 canBabbling 을 *로 치환.
            if (!replace_babble.includes('**')) {  //  만약 복사본을 *로 치환한것이 ** 의 값을 포함하지 않는다면
                babbling[i] = babbling[i].replaceAll(canBabbling[j], '*')  //  원본의 canBabbling 을 *로 치환해라.
            }
            if (babbling[i].replaceAll("*", "").length == 0) {
                result += 1
                break
            }
        }
    }
    return result;
}
