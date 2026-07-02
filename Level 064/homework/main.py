# def divisors(integer):
#     list = []
#     for i in range(2,integer):
#         if integer % i == 0:
#             list.append(i)
#     if len(list) == 0:
#         return f"{integer} is prime"
#     return list
     

# print(divisors(24))

# def duplicate_count(text):
#     text1 = text.lower()
#     list = []
#     list1 = []
#     for i in text1:
#         if text1.count(i) > 1:
#             list.append(i)
#     for char in list:
#         if char not in list1:
#             list1.append(char)
#     return len(list1)


# print(duplicate_count("abcbda"))

def sort_by_length(arr):
    list2 = []
    list = []
    for i in arr:
        list.append(len(i))
        list1 = sorted(list)
        list1[::-1]
    for i in list1:
        for char in arr:
            if i == len(char):
                list2.append(char)
    return list2

    
print(sort_by_length(["Telescopes", "Glasses", "Eyes", "Monocles"]))