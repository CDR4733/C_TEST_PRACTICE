function solution(balls, share) {
    var answer = 0;
    var fac = (x) => (x == 0 ? 1 : x * fac(x - 1));
    answer = Math.round(fac(balls) / (fac(balls - share) * fac(share)));
    return answer;
}