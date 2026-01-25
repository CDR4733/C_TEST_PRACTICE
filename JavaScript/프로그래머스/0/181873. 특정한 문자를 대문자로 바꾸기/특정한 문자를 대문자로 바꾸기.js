function solution(my_string, alp) {
    var answer = "";
    for (const e of my_string) {
        if (e == alp) {
            answer += e.toUpperCase();
        } else {
            answer += e;
        }
    }
    return answer;
}