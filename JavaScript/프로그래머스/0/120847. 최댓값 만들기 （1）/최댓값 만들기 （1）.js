function solution(numbers) {
    var answer = 0;
    orderedNumbers = numbers.sort((a,b) => b - a)
    answer = orderedNumbers[0] * orderedNumbers[1];
    return answer;
}