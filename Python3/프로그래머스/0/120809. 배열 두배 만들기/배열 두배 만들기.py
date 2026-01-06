def solution(numbers):
    answer = []
    def a(e):
        return e * 2
    a_numbers = map(a, numbers)
    answer = list(a_numbers)
    return answer