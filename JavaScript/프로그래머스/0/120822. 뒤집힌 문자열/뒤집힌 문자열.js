function solution(my_string) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        answer = answer + my_string[my_string.length - (i + 1)];
    }
    return answer;
}