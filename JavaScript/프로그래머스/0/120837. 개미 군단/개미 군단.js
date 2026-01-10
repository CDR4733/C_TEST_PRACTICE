function solution(hp) {
    var answer = 0;
    var g = 0;
    var a = 0;
    var l = 0;
    while (hp >= 5) {
        hp -= 5;
        g += 1;
    }
    while (hp >= 3) {
        hp -= 3;
        a += 1;
    }
    while (hp > 0) {
        hp -= 1;
        l += 1;
    }
    answer = g + a + l;
    return answer;
}