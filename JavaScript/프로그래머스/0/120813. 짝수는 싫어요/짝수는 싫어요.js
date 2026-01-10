function solution(n) {
    var answer = [];
    for (let i = 0; (2 * i + 1) <= n; i++) {
        answer.push(2 * i + 1);
    }
    return answer;
}