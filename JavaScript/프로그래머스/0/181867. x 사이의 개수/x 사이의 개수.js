function solution(myString) {
    var answer = [];
    var myArr = myString.split("x");
    answer = myArr.map((e) => e.length);
    return answer;
}