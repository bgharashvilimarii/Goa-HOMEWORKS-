


// დავალებები:

// გამოიყენე for...in და დაბეჭდე ობიექტის ყველა თვისება და მისი მნიშვნელობა.
// დაამატე ახალი თვისება city.
// შეცვალე grade-ის მნიშვნელობა.

// ---
const student = {
  name: "Nika",
  age: 16,
  grade: 10,
  school: "Future Academy"
};

for(let key in student) {
    console.log(key, student[key])
}

student.city = "tbilisi"
student.grade = 100
console.log(student)



// მაღაზიის პროდუქტები (for...in)
// შექმენი ობიექტი:

// const products = {
//   apple: 3,
//   banana: 5,
//   orange: 2,
//   kiwi: 7
// };


// დავალებები:

// for...in-ის გამოყენებით დაბეჭდე ყველა პროდუქტის სახელი და რაოდენობა.
// გამოთვალე ყველა პროდუქტის რაოდენობის ჯამი.
// დაბეჭდე მხოლოდ ის პროდუქტები, რომელთა რაოდენობა 4-ზე მეტია.

// ---

const products = {
  apple: 3,
  banana: 5,
  orange: 2,
  kiwi: 7
};
let total = 0
for(let key in products) {
    console.log(key, products[key])
}

for (let key in products) {
  total += products[key];
}

for (let key in products) {
  if (products[key] > 4) {
    console.log(key);
  }
}


// ცხოველების მასივი (for...of)
// შექმენი მასივი:

// const animals = [
//   { name: "Lion", age: 8 },
//   { name: "Tiger", age: 5 },
//   { name: "Elephant", age: 12 }
// ];


// დავალებები:

// for...of-ის გამოყენებით დაბეჭდე თითოეული ცხოველის სახელი და ასაკი.
// დაბეჭდე მხოლოდ ის ცხოველები, რომელთა ასაკი 6 წელზე მეტია.

const animals = [
  { name: "Lion", age: 8 },
  { name: "Tiger", age: 5 },
  { name: "Elephant", age: 12 }
];


for (let key of animals) {
  console.log(animals.name, animals.age);
}

for (let key of animals) {
  if (animals.age > 6) {
    console.log(animals.name,);
  }
}

// ფეხბურთელების მონაცემები (for...of),
// ,
// შექმენი მასივი:

// const players = [
//   { name: "Luka", goals: 12 },
//   { name: "Saba", goals: 7 },
//   { name: "Gio", goals: 15 }
// ];


// დავალებები:

// for...of-ის გამოყენებით გამოთვალე ყველა ფეხბურთელის გოლების ჯამი.,
// იპოვე ფეხბურთელი, რომელსაც ყველაზე მეტი გოლი აქვს.
const players = [
  { name: "Luka", goals: 12 },
  { name: "Saba", goals: 7 },
  { name: "Gio", goals: 15 }
];
let sum = 0;
for (let boy of players) {
  sum += boy.goals;
}

console.log(sum);


let highscore = players[0];

for (let boy of players) {
  if (boy.goals > highscore.goals) {
    highscore = boy;
  }
}

console.log(highscore);



// ბიბლიოთეკა (for...of + ჩაშენებული ობიექტები)
// შექმენი მასივი:

// const books = [
//   { title: "Harry Potter", pages: 350 },
//   { title: "The Hobbit", pages: 295 },
//   { title: "1984", pages: 328 }
// ];


// დავალებები:

// for...of-ის გამოყენებით დაბეჭდე ყველა წიგნის დასახელება.
// გამოიყენე Math.max() ან ჩვეულებრივი შედარება და იპოვე ყველაზე სქელი წიგნი (ყველაზე მეტი გვერდით).
// გამოთვალე ყველა წიგნის გვერდების ჯამი.