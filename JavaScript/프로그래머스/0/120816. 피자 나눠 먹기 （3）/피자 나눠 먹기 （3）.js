function solution(slice, n) {
    var answer = 0;
    do {
        answer++;
    } while ((answer * slice) < n);
    return answer;
}