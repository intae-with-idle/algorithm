function solution(numlist, n) {
    return numlist.sort((a, b) => {
        const [agap, bgap] = [Math.abs(a - n), Math.abs(b - n)];
        if (agap === bgap) return b - a;
        return agap - bgap;
    });
}