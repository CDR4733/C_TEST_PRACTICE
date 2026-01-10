function solution(numbers) {
    var answer = 0;
    var orderedNumbers = numbers.sort((a, b) => a - b);
    var left = orderedNumbers[0] * orderedNumbers[1];
    var right = orderedNumbers.at(-1) * orderedNumbers.at(-2);
    answer = left > right ? left : right;
    return answer;
}