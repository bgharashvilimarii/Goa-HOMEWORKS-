# def dashatize(n):
#     if n < 0:
#         n = -n
#     result = ""
#     string = str(n)
#     for i in range(len(string)):
#         result += string[i]
#         if i < len(string) - 1:
#             if int(string[i]) % 2 == 1 or int(string[i + 1]) % 2 == 1:
#                 result += "-"
#     return result

# print(dashatize(274))



# def group_by_commas(n):
#     string = str(n)
#     nums = 0
#     result = ""
#     for i in range(len(string) - 1,-1,-1):
#         result = string[i] + result
#         nums += 1
#         if nums == 3 and i != 0:
#             result = "," + result
#             nums = 0
#     return result
        



# print(group_by_commas(2147483647))



def compute_depth(n):
    string = str(n)
    nums = 0
    while len(string) < 10:
        nums += 1
        total = str(n * nums)
        for i in total:
            if i not in string:
                string += i
    return nums




print(compute_depth(8))


