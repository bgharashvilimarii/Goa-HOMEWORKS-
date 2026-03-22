# upper function gamoiyeneba imistvis rom stringi romelsac mas gadavcemt daiweros uppercase-shi anu didi asoebit 
print("mari".upper())
print("bayayi".upper())
print("shekvetili".upper())
# lower function gamoiyeneba imistvis rom  stringi romelsac mas gadavcemt daiweros lower case-shi anu patara asoebit
print("mari".lower())
print("bayayi".lower())
print("shekvetili".lower())
# capitalize funqtion gamoiyeneba imistvis rom  stringis pirveli aso ropmelsac mas gadavcemt daiweros didi asoti (mxolod pirveli aso)
print("mari".capitalize())
print("bayayi".capitalize())
print("shekvetili".capitalize())
# title function gamoikeneba imistvis rom rodesac mas ramdenime sitkvian strings gadavcemt yom=velis sitkvis pirveli aso daiwereba didi asoti
# danarchemi patarati(lower case-shi)
print("mari bgharashvili".title())
print("bayayi wyalshi yiyinebs".title())
print("kurorti shekvetili".title())

# find funqcia gamoiyofa dot notaciit, amowmebs stringis asoebs da abrunebs ()-shi
#  mititebuli asos indexs(es aso aucileblad unda iyos chasmuli ""-shi") 
# aseve shegviZlia mivutitot asos shemdeg indexsi romelic iqneba gamoyofili ","-it asosgan da es
# indexsi gvichvenebs tu saidan-anu romel indexsze mdgomi asodan unda daiwyos atvla-asos dzebna
# tu ()-shi mititebul asos ver ipovis am shemtxvevashi abrunebs -1-s 
# tu ()-shi arafers ar mivutitebt Erroria  
# mokled rom vtqvat .find() funqcia gamoiyeneba imistvis rom vipovot stringis
#  asos(romelsac chven()-shi mivutitebt ) mdebareoba 
print("mari bgharashvili".find("a", 1))
print("bayayi wyalshi yiyinebs".find("t"))
print("kurorti shekvetili".find("t"))

# dot notation aris syntaxi romlitac idzxeben function-ebs- metodebs



        



# def get_middle(s):
#     if len(s) % 2 == 0:
#         midd1 = len(s) // 2 - 1
#         midd2 = len(s) // 2
#         return midd1+midd2
#     else:
#         midd = len(s) // 2
#         lett = s[midd]
#         return lett
    
# print(get_middle("middle"))


# def maskify(cc):
#     total = len(cc[:-4])
#     result = total * "#"
#     count = cc[-4:]
#     return result + count
    
    


        

# print(maskify("mariami"))

# def create_phone_number(n):
#     nums = n[:3]
#     nums1 = n[3:6]
#     nums2 = n[6:]
#     count = ""
#     count1 = ""
#     count3= ""
#     for  i in nums:
#         count += str(i)
#     start  = "(" + count + ")" + " "
#     for num in nums1:
#         count1 += str(num)
#     start1 = count1 + '-'
#     for m in nums2:
#         count3 += str(m)
#     return start + start1 + count3


# def likes(names):
#     lst = len(names)
#     lst1 = len(names) - 2
#     if lst == 1:
#         return f"{names[0]} likes this"
#     elif lst == 2:
#         return f"{names[0]} and {names[1]} like this"
#     elif lst == 3:
#         return f"{names[0]}, {names[1]} and {names[2]} like this"
#     elif lst >= 4:
#         return f"{names[0]}, {names[1]} and {lst1} others like this"
#     elif names == []:
#         return "no one likes this"
# print(likes(["Alex", "Jacob", "Mark", "Max", "mari", "eto"]))
    
    
    
    



        


# def to_jaden_case(string):
#     lst = []
#     cap = string.split(" ")
#     for i in cap:
#         lst.append(i.capitalize())
#     return " ".join(lst)
    
    
        
    


# print(to_jaden_case("How can mirrors be real if our eyes aren't real"))


# def digital_root(n):
#     num = str(n)
    

#     while len(num) > 1:
#         list = []
#         for i in num:
#             list.append(int(i))
#         number = sum(list)
#         num= str(number)         
#     return int(num)


# print(digital_root(927))


# def high_and_low(numbers):
#     num = numbers.split(' ')
#     nums = []
#     for i in num:
#         nums.append(int(i))
#         dig = str(max(nums)) + " " + str(min(nums))
#     return dig

# print(high_and_low("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))



# def to_jaden_case(string):
#     lst = []
    
#     if len(string) < 140:
#         cap = string.split(" ")
#         for i in cap:
#             lst.append(i.capitalize())
#         return "#" +"".join(lst)
#     elif len(string) > 140:
#         return "false"
#     else:
#         return "false"

# print(to_jaden_case("    Hello     World   "))

# def move_zeros(lst):
#     lst2 = []
#     lst1 = lst.count(0)
#     zero = lst1 * "0"
#     for i in lst:
#         if i != 0:
#             lst2.append(i)
#     for num in zero:
#         lst2.append(int(num))
#     return lst2


# print(move_zeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))

# def max_sequence(arr):
#     lst = []
#     lst1 = []
#     temp = arr.copy() 
#     list1 = []
#     for i in range(4):
#         maxx = max(temp)      
#         list1.append(maxx)     
#         new_temp = []
#         for x in temp:
#             if x != maxx:
#                 new_temp.append(x)
#             temp = new_temp
#         return sum(list1)
#     if i >= 0:
#         lst.append(i)
#         if len(lst) == len(arr):
#             return sum(arr)
#     elif i < 0:
#         lst1.append(i)
#         if len(lst1) == len(arr):
#             return 0


# print(max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))


# def max_sequenc(arr):
#     temp = arr.copy()  
#     list1 = []

#     for _ in range(4):
#         maxx = max(temp)      
#         list1.append(maxx)     

#         new_temp = []
#         for x in temp:
#             if x != maxx:
#                 new_temp.append(x)
#         temp = new_temp
#     return sum(list1)

# print(max_sequenc([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

    
def format_duration(seconds):
    if seconds == 0:
        return "now"
    else:
        year = 31536000
        day = 86400
        hour = 3600
        minutes = 60 
        nums = seconds // year #year
        ok = year * nums
        nashti = seconds - ok

        number = nashti // day #day
        numbers = number * day
        nashti = nashti - numbers

        slay = nashti // hour #hour
        ok1 = slay * hour
        nashti = nashti - ok1

        slay1 = nashti // minutes
        ok2 = slay1 * minutes
        nashti = nashti - ok2

        seconds = nashti
        result = f"{nums} year, {number} day, {slay} hour, {slay1} minuts and {nashti} seconds"
        return result
    

print(format_duration(3600))


        # parts = []
        # if nums > 0:
        #     if nums == 1:
        #         parts.append("1 year")
        #     else:
        #         parts.append(f"{nums} years")
        #         if number > 0:
        #             if number == 1:
        #                 parts.append("1 day")
        #             else:
        #                 parts.append(f"{number} days")
        #         if slay > 0:
        #             if slay == 1:
        #                 parts.append("1 hour")
        #             else:
        #                 parts.append(f"{slay} hours")
        #         if slay1 > 0:
        #             if slay1 == 1:
        #                 parts.append("1 minute")
        #             else:
        #                 parts.append(f"{slay1} minutes")
        #         if nashti > 0:
        #             if nashti == 1:
        #                 parts.append("1 second")
        #             else:
        #                 parts.append(f"{nashti} seconds")
        #         if len(parts) == 0:
        #             return "0 seconds"
        #         if len(parts) == 1:
        #             return parts[0]
        #     print(", ".join(parts[:-1]) + " and " + parts[-1])




# year = 31536000
# day = 86400
# hour = 3600
# minutes = 60 
# num = 253374061
# nums = num // year #year
# ok = year * nums
# nashti = num - ok

# number = nashti // day #day
# numbers = number * day
# nashti = nashti - numbers

# slay = nashti // hour #hour
# ok1 = slay * hour
# nashti = nashti - ok1

# slay1 = nashti // minutes
# ok2 = slay1 * minutes
# nashti = nashti - ok2

# seconds = nashti
# print(number)




def format_duration(seconds):
    if seconds == 0:
        return "now"
    else:
        year = 31536000
        day = 86400
        hour = 3600
        minutes = 60 
        nums = seconds // year #year
        ok = year * nums
        nashti = seconds - ok

        number = nashti // day #day
        numbers = number * day
        nashti = nashti - numbers

        slay = nashti // hour #hour
        ok1 = slay * hour
        nashti = nashti - ok1

        slay1 = nashti // minutes
        ok2 = slay1 * minutes
        nashti = nashti - ok2

        seconds = nashti
        result = f"{nums} year, {number} day, {slay} hour, {slay1} minuts and {nashti} seconds"

        result = []

        if nums:
            result.append(f"{nums} year" + ("s" if nums > 1 else ""))
        if number:
            result.append(f"{number} day" + ("s" if number > 1 else ""))
        if slay:
            result.append(f"{slay} hour" + ("s" if slay > 1 else ""))
        if slay1:
            result.append(f"{slay1} minute" + ("s" if slay1 > 1 else ""))
        if seconds:
            result.append(f"{seconds} second" + ("s" if seconds > 1 else ""))

        if len(result) == 1:
            return result[0]

        return ", ".join(result[:-1]) + " and " + result[-1]
