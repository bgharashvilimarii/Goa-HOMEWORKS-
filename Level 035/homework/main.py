# function aris kodis bloki(ranodenime xazi kodi romelic ert struqturas kmnis/rkutnis) romelic gamoikeneba ragac konkretuli davalebis shesasruleblad
# am functionebs chven tviton vwert da amistvis gamoikeneba def shemdeg functionis saxeli (nebismieri saxelis darkmeva shegvidzlia)
# shemdeg ()- romelshic iwereba parametrebi amis shemdeg :  amis shemdeg iwereba functionis tani pitobid mixedvit
# xolo amis shemdeg xdeba mati gamodzaxeba function_is saxelit ()-it da ()-shi argumentebit.

# # დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათგან დიდს.
# def max(x,y):
#     if x > y:
#         return x
#     else:
#         return y
 
# print(max(75,333))

# # დაწერე ფუნქცია, რომელიც მიიღებს სიგრძეს და სიგანეს და დააბრუნებს მართკუთხედის ფართობს.
# def spr(x,y):
#     return x * y
# print(spr(7,9))

# დადებითია, უარყოფითი თუ ნულია
# def nums(x):
#     if x > 0:
#         return f"{x} is positive number" 
#     elif x < 0:
#         return f"{x} is negative number"
#     else:
#         return f"{x} is zero"
# print(nums(0))

# # დაწერე ფუნქცია, რომელიც მიიღებს ასაკს და დააბრუნებს:

# def check_nums(x):
#     if x >= 18:
#         return f"person is adult"
#     else:
#         return f"person is teen"

# print(check_nums(18))



# def accum(st):
#     list = []
#     num = 0
#     for i in st:
#         list.append(i.upper() + i.lower() * num)
#         num += 1
#     return "-".join(list)


# print(accum("ZpglnRxqenU"))

# def longest(a1, a2): 
#     list = []
#     for i in a1:
#         if i not in list:
#             list.append(i)
#     for k in a2:
#         if k not in list:
#             list.append(k)
#             um = sorted(list)
#     return "".join(um)
    
    
# print(longest("aretheyhere", "yestheyarehere"))

# def remove_url_anchor(url):
#     um = len(url)
#     ok = url.index("#")
#     count = um - ok
#     okey = url[:-count]
#     return okey
 


    
# print(remove_url_anchor("www.codewars.com#about"))

# def number(bus_stops):
#     list2 = []
#     list1 = []
#     list = []
#     for i in bus_stops:
#         for k in i:
#             list.append(k)
#     for char in list[::2]:
#         list1.append(char)
#     for num in list[1::2]:
#         list2.append(num)
#     return sum(list1) - sum(list2)


    
 

# print(number([[10,0],[3,5],[5,8]]))

# def sum_digits(number):
#     list = []
#     if number < 0:
#         number = -1 * number
#     result = str(number)
#     for i in result:
#         list.append(int(i))
#     return sum(list)







# print(sum_digits(10))


# def narcissistic( value ):
#     list1 = []
#     list = []
#     um = str(value)
#     for i in um:
#         list.append(int(i))
#     for num in list:
#         list1.append(num**len(um))
#     if sum(list1) == value:
#         return True
#     else:
#         return False
        
# print(narcissistic(371))


# def sum_mul(n, m):
    
#     list = []
#     for i in range(n,m,n):
#         list.append(i)
#     return sum(list)

# print(sum_mul(2,9))

# def fizzbuzz(n):
#     list = []
#     for i in range(1,n+1):
#         if i % 3 == 0 and i % 5 == 0:
#             list.append("FizzBuzz")
#         elif i % 5 == 0:
#             list.append("Buzz")
#         elif i % 3 == 0:
#             list.append("Fizz")
#         else:
#              list.append(i)
#     return list
# print(fizzbuzz(15))

# def xo(s):
#     let = s.lower()
#     list = []
#     for i in let:
#         list.append(i)
#         um = list.count("x")
#         um1 = list.count("o")
#         if "x" or "o" not in list:
#             return True
#         elif um == um1:
#             return True
#     return False

# print(xo("xooxx"))

# def is_isogram(string):
#     root = string ** 0.5
#     if root == int(root):
#         return (int(root)+1) ** 2
#     else:
#         return -1


  
    
# print(is_isogram(121))



# def vaporcode(s):
#     list = []
#     for i in s:
#         if i != " ":
#             list.append(i)
#     return " ".join(list)
 

# print(vaporcode("Lets go to the movies"))

# def password(st):
#     list1 = []
#     list = []
#     nums = ["1","2","3","4","5","6","7","8","9","0"]
#     for i in st:
#         list.append(i)
#         for k in nums:
#             for i in list:
#                 if i == k:
#                     list1.append(int(i))
#     return list1


        
    # for i in st:
    #     if len(st) >= 8 and i.lower() >= 1 or i.upper() >= 1 or i == int(i):
    #         return True
    #     else:
    #         return False
# print(password("Abcd1234"))


# def sum_two_smallest_numbers(numbers):
#     min1 = min(numbers)
#     x = numbers.index(min1)
#     numbers.pop(x)
#     min2 = min(numbers)
#     return min1 + min2
# print(sum_two_smallest_numbers([19, 5, 42, 2, 77]))

# def spot_diff(s1, s2):
#     list = []
#     for i in s1:
#         if i not in s2:
#             list.append(s1.index(i))
#     return list
       
# print(spot_diff('abcdefg', 'abcqetg'))




def meeting(s):
    names = s.upper().split(";")
    data = []
    for person in names:
        first,last = person.split(":")
        data.append((last,first))
        data.sort()
        result = ""
        for last,first in data:
            result += "(" + last + ", " + first + ")"

    return result

    
print(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))