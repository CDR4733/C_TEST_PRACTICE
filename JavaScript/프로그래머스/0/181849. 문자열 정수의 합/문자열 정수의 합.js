function solution(num_str) {
    var answer = 0;
    answer = num_str.split("").reduce((acc, cur) => +acc + +cur);
    return answer;
}