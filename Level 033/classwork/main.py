# 1) შექმენით სახელების სია (minimum 5 elements), მომხმარებელს input ფუნქციის მეშვეობით შემოატანინეთ 
# სახელი და ჩაამატეთ მომხმარებლის შემოტანილი მნიშვნელობა სიის ბოლოში. გამოიყენეთ შესაბამისი ფუნქცია.

names = [ "mari" , "dachi" , "nika", "luka"]
name = input("write any name you want: ")
names.append(name)
print(names)

# insert ფუნქციის მეშვეობით ჩაამატეთ 3-ე index-ზე ახალი სახელი "Tarieli"

names = [ "mari" , "dachi" , "nika", "luka"]
names.insert(3 , "Tarieli")
print(names)

# pop ფუნქციის მეშვეობით სიაში წაშალეთ მე-4-ე index-ზე მყოფი მნიშვნელობა სიიდან
names = [ "mari" , "dachi" , "nika", "luka", "daviti"]
names.pop(4)
print(names)

# remove ფუნქციის მეშვეობით წაშალეთ 1 ნებისმიერი სახელი თქვენი წინასწარ გამზადებული სიიდან.
names = [ "mari" , "dachi" , "nika", "luka", "daviti"]
names.remove("mari")
print(names)

# მომხმარებელს შემოატანინეთ სახელი და შეამოწმეთ თუ 
# რომელ index-ზე დგას ელემენტი თუა სიაში რა თქმა უნდა,
#  თუ არაა სიაში მაშინ დაუბეჭდეთ რომ "not index in list"

names = [ "mari" , "dachi" , "nika", "luka", "daviti"]
name = input("write any name you want: ")

if name in names:
    print(names.index(name))
else:
    print("not index in list")
