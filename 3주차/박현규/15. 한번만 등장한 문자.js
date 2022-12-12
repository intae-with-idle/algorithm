function solution(s) {
    let result = s;

    for (i = 0; i < s.length; i++) {

        for (j = 0; j < s.length; j++) {

            if (i !== j && s[i] == s[j]) {
                result = result.replaceAll(s[i], '')
            }
        }
    }
    return result.split('').sort().join('')
}