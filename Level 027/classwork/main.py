# nums = [1,2,3,4,5,6,7,8,9,10]
# print(nums[4])
# new_nums = nums[1:6]
# print(new_nums)
# print(new_nums[-1])

# names_list = ["mari", "dachi", "natia", "nika", "lika", "giorgi", "eto", "luka", "temo", "nini"]  
# print(names_list[::2])
# print(names_list[3:8:3])

# new_names_list = names_list[:5]
# # new_names_list[::-1]
# print(new_names_list[::-1])

# names = names_list[:]
# names_list[7] = "lasha"

# print(names)
# print(names_list)

# N1
nums = [1,2,3,4,5]
for i in range(len(nums[:])):
    print(nums[i])

# is same as:
nums = [1,2,3,4,5]
for i in range(len(nums)):
    print(nums[i])


# N2
num = [1,2,3,4,5]
for nums in num:
    print(nums)