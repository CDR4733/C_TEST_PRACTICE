function solution(a, b) {
    var answer = 0;
    if (a % 2 == 1 || b % 2 == 1) answer = 2 * (a + b);
    if (a % 2 == 1 && b % 2 == 1) answer = a ** 2 + b ** 2;
    if (a % 2 == 0 && b % 2 == 0) answer = a - b;
    if (answer < 0) answer = -answer;
    return answer;
}