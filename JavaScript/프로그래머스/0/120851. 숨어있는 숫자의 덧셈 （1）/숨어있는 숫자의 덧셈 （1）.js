function solution(my_string) {
    var answer = my_string.split('').filter((e) => !isNaN(+e)).reduce((acc, cur) => (+acc) + (+cur));
    return answer;
}