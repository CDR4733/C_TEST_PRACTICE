function solution(age) {
    var answer = '';
    var pro = 'abcdefghij';
    answer = String(age).split('').map((a) => pro[a]).join('');
    return answer;
}