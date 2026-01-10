function solution(n) {
    var answer = [n];
    function collatz(x) {
        if (x % 2 == 0) {
            answer.push(x / 2);
        } else if (x !== 1) {
            answer.push(3 * x + 1);
        } else if (x == 1) {
            answer.push(x);
        }
    }
    do {
        collatz(answer.at(-1))
    } while (answer.at(-1) !== 1);
    return answer;
}