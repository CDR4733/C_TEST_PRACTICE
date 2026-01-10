function solution(my_string, is_prefix) {
    var answer = my_string.substr(0, is_prefix.length) == is_prefix ? 1 : 0;
    return answer;
}