function solution(bin1, bin2) {
    let resultBin1 = 0;
    let resultBin2 = 0;

    for (let i = 0; i < bin1.length; i++) {
        resultBin1 = resultBin1 + (bin1[i] * (2 ** (bin1.length - 1 - i)))
    }

    for (let j = 0; j < bin2.length; j++) {
        resultBin2 = resultBin2 + (bin2[j] * (2 ** (bin2.length - 1 - j)))
    }

    let arabicNumResult = resultBin1 + resultBin2
    let result = arabicNumResult.toString(2)
    return result;
}