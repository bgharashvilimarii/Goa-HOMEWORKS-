// დავალება 1
// შექმენი მასივი, რომელიც შეიცავს 3 სტუდენტის სახელს.

// push() მეთოდით დაამატე ახალი სტუდენტი მასივის ბოლოში.
// pop() მეთოდით წაშალე ბოლო სტუდენტი.
// unshift() მეთოდით დაამატე ახალი სტუდენტი მასივის დასაწყისში.
// shift() მეთოდით წაშალე პირველი სტუდენტი.
// დაბეჭდე საბოლოო მასივი.

const students = ["mari" , "dachi" , "nika"]
students.push("giorgi")
students.unshift("luka")
students.shift()
console.log(students)

// დავალება 2
// შექმენი ორი მასივი:

// პირველი მასივი შეიცავდეს 3 ხილს.
// მეორე მასივი შეიცავდეს 3 ბოსტნეულს.

// concat() მეთოდის გამოყენებით გააერთიანე ორივე მასივი ერთ ახალ მასივად და დაბეჭდე შედეგი.

const fruits = ["apple", "banana" , "mango"]
vegetable = ["cucumber" ,"tomato" , "potato"]
both = fruits.concat(vegetable)
console.log(both)

// დავალება 3
// შექმენი მასივი, რომელიც შეიცავს რიცხვებს 1-დან 10-მდე.

// slice() მეთოდის გამოყენებით:

// შექმენი ახალი მასივი, რომელიც შეიცავს 4-ე, 5-ე, 6-ე და 7-ე ელემენტებს.
// დაბეჭდე როგორც ახალი მასივი, ასევე საწყისი მასივი.

const numbers = [1,2,3,4,5,6,7,8,9]
newNumbers = numbers.slice(3,7)
console.log(newNumbers)
console.log(numbers)

// დავალება 4
// შექმენი ცარიელი მასივი cart.

// push() მეთოდით დაამატე 3 პროდუქტი.
// shift() მეთოდით წაშალე პირველი პროდუქტი.
// unshift() მეთოდით დასაწყისში დაამატე ახალი პროდუქტი.
// pop() მეთოდით წაშალე ბოლო პროდუქტი.
// დაბეჭდე საბოლოო მასივი.

const cart = []
cart.push("milk","eggs","mango")
cart.shift()
cart.unshift("candy")
cart.pop()
console.log(cart)


// დავალება 5
// შექმენი ორი მასივი:

// favoriteMovies – 3 საყვარელი ფილმი.

// newMovies – 2 ახალი ფილმი.

// concat() მეთოდით გააერთიანე ორივე მასივი.

// slice() მეთოდით შექმენი ახალი მასივი, რომელიც შეიცავს მხოლოდ პირველ 3 ფილმს.

// დაბეჭდე ორივე მასივი.

const favoriteMovies = ["interstellar","10 thing i hate abt u","F1"]
newMovies = ["Star Wars","Toy Story 5"]
newArray = favoriteMovies.concat(newMovies)
result = newArray.slice(0, 3)
console.log(result)
