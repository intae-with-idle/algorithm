let canBabbling = ['aya', 'ye', 'woo', 'ma']

function solution(babbling) {
    let result = 0;

    for (i = 0; i < babbling.length; i++) {
        let newBabbling = JSON.parse(JSON.stringify(babbling[i]));

        for (j = 0; j < canBabbling.length; j++) {
            let replace_babble = newBabbling.replaceAll(canBabbling[j], '*')

            if (!replace_babble.includes('**')) {
                babbling[i] = babbling[i].replaceAll(canBabbling[j], '*')
            }
            if (babbling[i].replaceAll('*', '') == 0) {
                result += 1
                break;
            }
        }
    }
    return result
}
