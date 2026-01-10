function solution(str1, str2) {
    var answer = str1.split(str2).length !== 1 ? 1 : 2
    return answer;
}