function solution(num_list) {
    var answer = 0;
    var multi = num_list.reduce((acc, cur) => acc * cur);
    var plus = num_list.reduce((acc, cur) => acc + cur);
    if (multi < plus ** 2) answer = 1;
    return answer;
}