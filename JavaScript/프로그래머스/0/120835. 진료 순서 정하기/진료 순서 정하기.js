function solution(emergency) {
    var answer = [];
    for (let i = 0; i < emergency.length; i++) {
        let x = 1;
        for (let j = 0; j < emergency.length; j++) {
            if (emergency[i] < emergency[j]) {
                x++;
            }
        }
        answer.push(x);
    }
    return answer;
}