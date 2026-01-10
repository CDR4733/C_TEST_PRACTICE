function solution(n) {
    var answer = 0;
    if (n % 2 !== 0) {
        for (let i = 0; i <= parseInt(n / 2); i++) {
            answer = answer + (2 * i + 1);
        }
    } else {
        for (let j = 1; j <= parseInt(n / 2); j++) {
            answer = answer + ((2 * j) ** 2);
        }
    }
    return answer;
}