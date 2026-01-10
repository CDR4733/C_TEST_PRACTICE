function solution(my_string) {
    var answer = '';
    var filterArr = ['a', 'e', 'i', 'o', 'u'];
    answer = my_string.split('').filter((e) => !filterArr.includes(e)).join('');
    return answer;
}