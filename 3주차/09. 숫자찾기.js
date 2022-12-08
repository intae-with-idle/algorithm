function solution(num, k) {
    for (i = 0; i < num.toString().length; i++) {
        if (num.toString()[i] == k) {
            return i+1
        }
    }
    return -1
}