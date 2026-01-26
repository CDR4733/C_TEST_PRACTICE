function solution(num, k) {
    var answer = -1;
    if (("" + num).includes("" + k)) {
        answer = ("" + num).indexOf("" + k) + 1;
    }
    return answer;
}