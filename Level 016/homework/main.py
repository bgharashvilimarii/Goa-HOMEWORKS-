# num = 10
# while num >= -10:
#     print(num)
#     num -= 1

# 
# მომხმარებელს შემოატანინეთ
# პაროლი იქამდე სანამ ის 
# არ გაუტოლდება "goa123"-ს, ამასთან ერთად მას უნდა ჰქონდეს მხოლოდ
# 3 მცდელობა სწორი პაროლის შესაყვანად. ყოველი 
# არასწორი მცდელობისას დაუბეჭეთ "Password is incorrect! Try again",
# ასევე დაუბეჭდეთ ის თუ რამდენი მცდელობა
# (მხოლოდ რიცხვი არა, ტექსტი გასაგებად).
# თუ მომხმარებელს ამოეწურა მცდელობების რაოდენობა ან სწორად შეიყვანა პაროლი უბრალოდ გათიშეთ while ციკლი

# correct_password = "goa123"
# print("you have 3 tries")
# input_password = input("Please Enter Your Password: ")

# tries = 2


# while input_password != correct_password and tries > 0:
#     print("Password is incorrect! Try again")
#     print("you have " + str(tries) + " tries left")
#     tries = tries - 1
#     input_password = input("Please Enter Your Password: ")
def evaluate(equation):
    math = equation.split(" @ ")
    total = int(math[0])
    for i in range(1 ,len(math)):
        b = int(math[i])
        if b == 0:
            return None
        result = (total + b) + (total - b) + (total * b) + (total // b)
    return result


print(evaluate('1 @ 1 @ -4'))