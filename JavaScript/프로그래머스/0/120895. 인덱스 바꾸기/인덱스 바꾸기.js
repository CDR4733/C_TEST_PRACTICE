function solution(my_string, num1, num2) {
    var answer = '';    
    let my_arr = my_string.split('');
    let new_arr = [];
    for (let i = 0; i < my_arr.length; i++) {
        if (i !== num1 && i !== num2) {
            new_arr.push(my_arr[i]);
        };
        if (i == num1) {
            new_arr.push(my_arr[num2]);
        };
        if (i == num2) {
            new_arr.push(my_arr[num1]);
        }
    }    
    answer = new_arr.join('');
    return answer;
}