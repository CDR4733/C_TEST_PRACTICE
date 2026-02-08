function solution(num_list) {
    var answer = 0;
    var odds = 0;
    var evens = 0;
    for (let i = 0; i < num_list.length; i++) {
        if (i % 2 == 0) {
            odds += num_list[i];
        } else {
            evens += num_list[i];
        }
    }
    answer = Math.max(odds, evens);
    return answer;
}