function solution(myString, pat) {
    var answer = 0;
    var compare = "";
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] == "A") compare += "B";
        if (myString[i] == "B") compare += "A";
    }
    if (compare.includes(pat)) answer = 1;
    return answer;
}
