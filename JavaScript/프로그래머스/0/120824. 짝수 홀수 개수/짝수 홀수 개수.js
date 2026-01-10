function solution(num_list) {
    var answer = [];
    var evens = 0;
    var odds = 0;
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 == 0) {
            evens++;
        } else {
            odds++;
        }
    }
    answer = [evens, odds];
    return answer;
}