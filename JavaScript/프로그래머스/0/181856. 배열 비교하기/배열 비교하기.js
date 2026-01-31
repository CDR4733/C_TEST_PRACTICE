function solution(arr1, arr2) {
    var answer = 0;
    if (arr1.length > arr2.length) answer = 1;
    if (arr1.length < arr2.length) answer = -1;
    if (arr1.length == arr2.length) {
        var arr1sum = arr1.reduce((acc, cur) => acc + cur);
        var arr2sum = arr2.reduce((acc, cur) => acc + cur);
        if (arr1sum > arr2sum) answer = 1;
        if (arr1sum < arr2sum) answer = -1;
    }
    return answer;
}