function solution(num_list) {
    var answer = 0;
    var odds = num_list.filter((e) => e % 2 !== 0).join("");
    var evens = num_list.filter((e) => e % 2 == 0).join("");
    answer = +odds + +evens;
    return answer;
}