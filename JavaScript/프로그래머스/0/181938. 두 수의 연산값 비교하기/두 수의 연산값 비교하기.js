function solution(a, b) {
    var plus = Number(a.toString() + b.toString());
    var multi = 2 * a * b;
    var answer = plus > multi ? plus : multi;
    return answer;
}