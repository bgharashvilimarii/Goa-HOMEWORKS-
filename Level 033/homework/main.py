# # .append() function aris function romelic gamoikeneba mashin rodesac gvinda elementis chamateba siis boloshi 
# # .insert() function-is sashualebit chven shegvidzlia liashi chavamatot nebismieri elementi nebismier adgilas 
# #  .pop() function-is sashualebit ki chven shegvidzlia siidan amovagdot elementi


# # 3) შექმენით რამდენიმე ელენტისგან შემდგარი სია, თქვენი დავალებაა დაბეჭდოთ ამ სიის სიგრძე, ანუ სიაში არსებული ელემენტების რაოდენობა.
# list = [1, "mari", 3.5, True]
# print(len(list))

# # 4) შექმენით ხარიელი სია სადაც მომხმარებელს 5-ჯერ შემოატანინენებთ რიცხვს, შემდეგ კი დაამატებთ მას სიის ბოლოში append() ფუნქციით.

# names = []
# name1 = input("Enter any name u want: ")
# name2 = input("Enter any name u want: ")
# name3 = input("Enter any name u want: ")
# name4 = input("Enter any name u want: ")
# name5 = input("Enter any name u want: ")
# names.append(name1)
# names.append(name2)
# names.append(name3)
# names.append(name4)
# names.append(name5)
# print(names)


# # მოცემულია სია:
# # colors = ["red", "green", "blue", "yellow", "purple"]
# # თქვენი დავალებაა სიიდან წაშალოთ ბოლო ელემენტი .pop() მეთოდის დახმარებით, შემდეგ კი დაბეჭდოთ განახლებული სია.

# colors = ["red", "green", "blue", "yellow", "purple"]
# colors.pop(-1)
# print(colors)

# # მოცემულია სია:
# # animals = ["dog", "cat", "elephant", "lion"]
# # თქვენი დავალებაა insert() მეთოდით ჩასვათ სიტყვა "monkey" სიაში მეორე პოზიციაზე, რის შემდეგაც დაბეჭდავთ განახლებულ სიას.

# animals = ["dog", "cat", "elephant", "lion"]
# animals.insert(1, "monkey")
# print(animals)

# #  შემქნით ცარიელი სია, სადაც 3-ჯერ input-ის სახით მომხმარებელს შეაყვანინებთ 
# # სამი სტუდენტის სახელს და დაამატებთ სიაში append() ფუნქციით. შემდეგ კი ჩასვით
# # "Teacher" სიის თავში, წაშალეთ ბოლო სტუდენტი და დაბეჭდეთ სიის სიგრძე, ასვეე საბოლოო სია.

# School = []
# student1 = input("Enter first student name: ")
# student2 = input("Enter Second student name: ")
# student3 = input("Enter third student name: ")
# School.append(student1)
# School.append(student2)
# School.append(student3)
# School.insert(0, "Teacher")
# School.pop(-1)
# print(len(School))
# print(School)

# # კომენტარებით ახსენით თუ რა არის custom ფუნქციები,
# # რისთვის გამოვიყენებთ და რა დანიშნულება გააჩნიათ, ასევე ახსენით მისი 
# # შექმნის გზები ეტაპობრივად და ახსენეთ თუ რაა პარამეტრები და არგუმენტები.

# # custom functions aris iseri functions romelsac shen tviton kmni 

# # შექმენით ფუნქცია, რომელსაც გადაეცემა ორი რიცხვი. თქვენი დავალებაა დააბრუნოთ ამ ორი რიცხვის ჯამი.

# def sum(x,y):
#     return x + y

# print(sum(2 , 5))

# # შექმენით ფუნქცია, რომელსაც გადაეცემა 1 რიცხვი. 
# # თქვენი დავალებაა შეამოწმოთ ამ რიცხვის ლუწობა. 
# # თუ იგი ლუწია, დაბეჭდეთ "რიცხვი ლუწია" სხვა შემთხვევაში "რიცხვი კენტია"

# def even(num):
#      if num % 2 == 0:
#           return "number is even"
#      else:
#           return "number  is odd"
     
# print(even(3))

# #  შექმენით ფუნქცია, რომელსაც გადაეცემა 1 რიცხვი. თქვენი დავალებაა დააბრუნოთ ამ რიცხვის კვადრატული მნიშნელობა.

# def power(number):
#      return number ** 2

# print(power(5))

# # შექმენით ფუნქცია, რომელიც გადაცემულ ტექსტს აბრუნებს დიდი ასოებით.

# def upcase(string):
#      return f"{string.upper()}"

# print(upcase("slayqueen"))

# # შექმენით ფუნქცია, რომელსაც პარამეტრებად გადაეცემა სახელი და გვარი, თქვენი დავალებაა გამოიტანოთ მნიშვნელობები ერთი წინადადების სახით.

# def fullname(name,surname):
#         return f"{name} {surname}"

# print(fullname("Mariam" , "Bgharashvili"))


# def fullname(name,surname):
#         return f"your name is {name}, and your surname is {surname}"

# print(fullname("Mariam" , "Bgharashvili"))



