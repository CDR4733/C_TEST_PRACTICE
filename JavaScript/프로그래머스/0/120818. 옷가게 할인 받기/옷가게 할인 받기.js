function solution(price) {
    var answer = 0;
    if (price >= 500000) {
        answer = price * (1 - 0.2);
    } else if (price < 500000 && price >= 300000) {
        answer = price * (1 - 0.1);
    } else if (price < 300000 && price >= 100000) {
        answer = price * (1 - 0.05);
    } else {
        answer = price;
    }
    return parseInt(answer);
}