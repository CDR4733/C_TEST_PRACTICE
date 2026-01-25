function solution(arr, k) {
    var answer = [];
    if (k % 2 !== 0) {
        answer = arr.map((e) => e * k);
    } else {
        answer = arr.map((e) => e + k);
    }
    return answer;
}