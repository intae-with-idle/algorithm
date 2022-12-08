let s1 = [];
let s2 = [];

function solution(s1, s2) {
    let result = 0;
    for (i = 0; i < s1.length; i++) {
        for (j = 0; j < s2.length; j++) {
            if(s1[i] == s2[j]){
                result += 1
            }
        }
    }
    return result;
}