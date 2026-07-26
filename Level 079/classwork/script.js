// 2) შექმენით me ობიექტი, სადაც შეინახავთ name, surname და age კუთვნილებებს

const me = {
    name: "mariami",
    surname: "bgharashvili",
    age: 16
}
// დაბეჭდეთ ეს ობიექტი, შემდეგ დაბეჭდეთ მისი თითოეული კუთვნილება ცალ-ცალკე
console.log(me)
console.log(me.name)
console.log(me.surname)
console.log(me.age)

// წაშალეთ სასურველი კუთვნილება, საბოლოოდ კიდევ ერთხელ დაბეჭდეთ ობიექტი
delete me.age 
console.log(me)


// მომხმარებლის ინფორმაციის მართვა



const user = {
    name: "mari",
    age: 16,
    city : "tbilisi",
    isStudent: false

}
console.log(user)
user.city = "batumi"
user.phone = "iPhone"
delete user.isStudent 

// შექმენი ობიექტი product, რომელსაც ექნება:


const product = {
    name: "apple",
    category: "food",
    price: "1.30",
    inStock: true

}

product.price = 2
product.discount = 1
product.inalPrice = 1
console.log(product)

// შექმენი ობიექტი movie, რომელსაც ექნება:

const movie = {
    title: "mentalist",
    director: "idk",
    year: 2007,
    rating: 9.0
}

movie.rating = 9.5
movie.genre = "idk"

console.log(movie.title)
console.log(movie.director)
// შექმენი ობიექტი student, რომელსაც ექნება:


const student = {
    name: "lika",
    age: 23,
    school: "School N115",
    grades: [100, 100, 100]
}
student.grades.push(99)
student.age = 24
console.log(student)

// დავალება:

const employee = {
    firstName: "lia",
    lastName: "bgharashvili",
    position: "developer",
    salary: 3000,
    skills: ["HTML", "CSS", "JavaScript"]
}

employee.skills.push("C++")
employee.salary += 100
employee.fullName = employee.firstName + " " + employee.lastName
delete employee.position
console.log(employee)