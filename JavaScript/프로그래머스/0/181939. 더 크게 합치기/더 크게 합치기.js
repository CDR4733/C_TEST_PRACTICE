function solution(a, b) {
    var answer = 0;
    var ab = Number(a + "" + (b + ""));
    var ba = Number(b + "" + (a + ""));
    answer = ab >= ba ? ab : ba;
    return answer;
}