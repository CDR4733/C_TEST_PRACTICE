function solution(myString) {
    var answer = "";
    var filter = "abcdefghijk";
    for (let i = 0; i < myString.length; i++) {
        if (filter.includes(myString[i])) {
            answer += "l";
        } else {
            answer += myString[i];
        }
    }
    return answer;
}