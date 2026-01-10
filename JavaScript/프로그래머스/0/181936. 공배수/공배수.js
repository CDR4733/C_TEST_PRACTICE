function solution(number, n, m) {
    var answer = number % n !== 0 ? 0 : (number % m !== 0 ? 0 : 1);
    return answer;
}