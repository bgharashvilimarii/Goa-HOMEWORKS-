# function aris kodis bloki(ranodenime xazi kodi romelic ert struqturas kmnis/rkutnis) romelic gamoikeneba ragac konkretuli davalebis shesasruleblad
# am functionebs chven tviton vwert da amistvis gamoikeneba def shemdeg functionis saxeli (nebismieri saxelis darkmeva shegvidzlia)
# shemdeg ()- romelshic iwereba parametrebi amis shemdeg :  amis shemdeg iwereba functionis tani pitobid mixedvit
# xolo amis shemdeg xdeba mati gamodzaxeba function_is saxelit ()-it da ()-shi argumentebit.

# დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათგან დიდს.
def max(x,y):
    if x > y:
        return x
    else:
        return y
 
print(max(75,333))

# დაწერე ფუნქცია, რომელიც მიიღებს სიგრძეს და სიგანეს და დააბრუნებს მართკუთხედის ფართობს.
def spr(x,y):
    return x * y
print(spr(7,9))

# დადებითია, უარყოფითი თუ ნულია
def nums(x):
    if x > 0:
        return f"{x} is positive number" 
    elif x < 0:
        return f"{x} is negative number"
    else:
        return f"{x} is zero"
print(nums(0))

# დაწერე ფუნქცია, რომელიც მიიღებს ასაკს და დააბრუნებს:

def check_nums(x):
    if x >= 18:
        return f"person is adult"
    else:
        return f"person is teen"

print(check_nums(18))



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