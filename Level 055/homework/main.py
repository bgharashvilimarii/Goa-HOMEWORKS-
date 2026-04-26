def reverse_number(n):
    list = []
    num = str(n)
    if n > 0:
        return int(num[::-1])
    if n < 0:
        for i in num:
            if i != "-":
                list.append(i)
                um = "".join(list)
                um1 = "-" + um[::-1]
        return int(um1)
    if n == 0:
        return 0

print(reverse_number(-123))


def smaller(arr):
    result = []
    for i in range(len(arr)):
        count = 0
        for k in range(i + 1, len(arr)):
            if arr[k] < arr[i]:
                count += 1
        result.append(count)
    return result
