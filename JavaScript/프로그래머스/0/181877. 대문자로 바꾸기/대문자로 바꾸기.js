function solution(myString) {
    var answer = "";
    for (var str of myString) {
        answer += str.toUpperCase();
    }
    return answer;
}