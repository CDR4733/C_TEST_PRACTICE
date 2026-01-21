function solution(s1, s2) {    
    var intersection = new Set([...s1, ...s2]).size;
    var answer = s1.length + s2.length - intersection;
    return answer;
}