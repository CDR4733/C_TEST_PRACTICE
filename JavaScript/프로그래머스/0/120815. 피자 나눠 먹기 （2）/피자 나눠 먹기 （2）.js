function solution(n) {
    var answer = 0;
    do {
        answer++;
    } while ((6 * answer) % n !== 0);
    return answer;
}